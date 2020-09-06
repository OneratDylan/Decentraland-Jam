export class Room_2 extends Entity {
    // public vars


    //init
    constructor(
        //local vars
        pos: Vector3
    ) {
        //init this
        super();
        engine.addEntity(this)
        this.addComponent(new GLTFShape("Models/Room_10x10_02.gltf"))
        this.addComponent(new Transform({ position: pos }))
    }
}