import { SlerpData } from "customcomponents";
import { distance } from "customcomponents";

let doorMeshes: Array<string> =
    [
        "Models/Obj_Door_001.gltf",
        "Models/Obj_Door_002.gltf",
        "Models/Obj_Door_003.gltf",
        "Models/Obj_Door_004.gltf",
        "Models/Obj_Door_005.gltf",
    ];

export class Door extends Entity implements ISystem{

    // public vars
    public Open: boolean = false;
    public IsClosing: boolean = false;
    public isLocked: boolean = false;

    //init
    constructor(
        //local vars
        pos: Vector3,
        startRot: Vector3,
        endRot: Vector3,
        locked: boolean
    ) {
        //init this
        super();
        engine.addEntity(this)

        this.isLocked = locked;

        //model and pos
        this.addComponent(new GLTFShape(doorMeshes[Math.round( Scalar.RandomRange(0, doorMeshes.length - 1))]))
        this.addComponent(new Transform({
            position: pos,
            rotation: Quaternion.Euler(startRot.x, startRot.y, startRot.z)
        }))

        //slerp open close
        this.addComponent(new SlerpData())
        this.getComponent(SlerpData).originRot =
            Quaternion.Euler(startRot.x, startRot.y, startRot.z)
        this.getComponent(SlerpData).targetRot =
            Quaternion.Euler(endRot.x, endRot.y, endRot.z)

        //animation
        this.addComponent(new Animator())
        this.getComponent(Animator).addClip(new AnimationState("Obj_Door_Open", { looping: false}))

        //audio
        this.addComponent(new AudioSource(new AudioClip("Audio/Door_Open.mp3")))

        //on click
        if (!this.isLocked) {

            this.addComponent(
                new OnPointerDown(
                    (e) => {
                        this.getComponent(Animator).getClip("Obj_Door_Open").stop();
                        this.getComponent(Animator).getClip("Obj_Door_Open").play();
                        this.getComponent(SlerpData).fraction = 0
                        this.Open = true;
                        this.getComponent(AudioSource).playOnce()


                    },
                    { hoverText: "Open Door" }
                )
            )
        }
    }

    //update
    update(dt: number) {
        if (this.Open) {


            let slerp = this.getComponent(SlerpData)
            let transform = this.getComponent(Transform)
            if (slerp.fraction < 1) {
                let rot = Quaternion.Slerp(
                    slerp.originRot,
                    slerp.targetRot,
                    slerp.fraction
                )
                transform.rotation = rot
                slerp.fraction += dt / 2
            }
        }

        const camera = Camera.instance
        if (distance(this.getComponent(Transform).position, camera.position) > 15) {
            if (this.Open) {
                this.Open = false
                this.getComponent(SlerpData).fraction = 0;
                this.IsClosing = true
            }
            else if (this.IsClosing) {
                let slerp = this.getComponent(SlerpData)
                let transform = this.getComponent(Transform)
                if (slerp.fraction < 1) {
                    let rot = Quaternion.Slerp(
                        Quaternion.Euler(transform.eulerAngles.x,
                            transform.eulerAngles.y,
                            transform.eulerAngles.z),
                        slerp.originRot,
                        slerp.fraction
                    )
                    transform.rotation = rot
                    slerp.fraction += dt / 2
                }
            }
            if (this.getComponent(SlerpData).fraction >= 1) {
                this.getComponent(SlerpData).fraction = 0;
                this.IsClosing = false
          }
        }

    }
}
