import { SlerpData } from "customcomponents";

export class Door extends Entity {

    public doIt: boolean = false;

    constructor(
        model: GLTFShape,
        pos: Vector3,

        startRot: Vector3,
        endRot: Vector3
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

        this.addComponent(
            new OnPointerDown(
                (e) => {
                    this.doIt = true;
                },
                { hoverText: "Open Door" }
            )
        )   
    }
}