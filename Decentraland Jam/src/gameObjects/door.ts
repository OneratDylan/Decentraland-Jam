import { SlerpData } from "../game";

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

        this.addComponent(
            new OnPointerDown(
                (e) => {
                    //do thing here
                    this.doIt = true;
                },
                { hoverText: "Open Door" }
            )
        )
    }
}