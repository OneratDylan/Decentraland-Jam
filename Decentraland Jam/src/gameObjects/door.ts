import { SlerpData } from "customcomponents";

export class Door extends Entity {

    // public vars
    public Open: boolean = false;
    public IsClosing: boolean = false;

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
}