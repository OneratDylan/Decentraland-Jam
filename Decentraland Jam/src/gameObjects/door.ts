import { SlerpData } from "../game";

export class Door extends Entity {

    constructor(
        model: GLTFShape,
        pos: Vector3
    ) {
        super();
        engine.addEntity(this)

        this.addComponent(model)
        this.addComponent(new Transform({ position: pos }))
    }
}