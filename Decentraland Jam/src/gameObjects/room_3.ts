export class Room_3 extends Entity {
    // public vars

    //init
    constructor(
        //local vars
        pos: Vector3
    ) {
        //init this
        super();
        engine.addEntity(this)
        this.addComponent(new GLTFShape("Models/Room_10x10_03.gltf"))
        this.addComponent(new Transform({ position: pos }))
    }
}