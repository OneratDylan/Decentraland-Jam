import { SlerpData } from "customcomponents";

export class Door extends Entity {

    public doIt: boolean = false;

    constructor(
        model: GLTFShape,
        pos: Vector3
    ) {
        super();
        engine.addEntity(this)

        this.addComponent(model)
        this.addComponent(new Transform({ position: pos }))

        this.addComponent(new SlerpData())
        this.getComponent(SlerpData).originRot = Quaternion.Euler(0, 0, 0)
        this.getComponent(SlerpData).targetRot = Quaternion.Euler(0, 90, 0)

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