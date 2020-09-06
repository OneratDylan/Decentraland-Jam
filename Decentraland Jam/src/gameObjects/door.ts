import { SlerpData } from "customcomponents";
import { distance } from "customcomponents";

export class Door extends Entity implements ISystem{

    // public vars
    public Open: boolean = false;
    public IsClosing: boolean = false;

    //init
    constructor(
        //local vars
        model: GLTFShape,
        pos: Vector3,
        startRot: Vector3,
        endRot: Vector3,
        animationClip: AnimationState
    ) {
        //init this
        super();
        engine.addEntity(this)

        //model and pos
        this.addComponent(model)
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
        this.getComponent(Animator).addClip(animationClip)

        //audio
        this.addComponent(new AudioSource(new AudioClip("Audio/door_close.mp3")))

        //on click
        this.addComponent(
            new OnPointerDown(
                (e) => {
                    this.getComponent(Animator).getClip(animationClip.clip).stop();  
                    this.getComponent(Animator).getClip(animationClip.clip).play();  
                    this.getComponent(SlerpData).fraction = 0
                    this.Open = true;
                },
                { hoverText: "Open Door" }
            )
        )      
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
                this.getComponent(AudioSource).playOnce()
            }
        }

    }
}
