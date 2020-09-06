import { SlerpData } from "customcomponents";

export class Door extends Entity {

    public Open: boolean = false;
    public IsClosing: boolean = false;

    constructor(
        model: GLTFShape,
        pos: Vector3,

        startRot: Vector3,
        endRot: Vector3,

        animationClip: AnimationState
    ) {
        super();
        engine.addEntity(this)

        this.addComponent(model)
        this.addComponent(new Transform({ position: pos }))

        this.addComponent(new SlerpData())
        this.getComponent(SlerpData).originRot =
            Quaternion.Euler(startRot.x, startRot.y, startRot.z)
        this.getComponent(SlerpData).targetRot =
            Quaternion.Euler(endRot.x, endRot.y, endRot.z)

        this.addComponent(new Animator())
        this.getComponent(Animator).addClip(new AnimationState("Obj_Door_Open", { looping: false }))

        this.addComponent(
            new OnPointerDown(
                (e) => {
                    this.getComponent(Animator).getClip("Obj_Door_Open").stop();  
                    this.getComponent(Animator).getClip("Obj_Door_Open").play();  
                    this.getComponent(SlerpData).fraction = 0
                    this.Open = true;
                },
                { hoverText: "Open Door" }
            )
        )  


    }
}