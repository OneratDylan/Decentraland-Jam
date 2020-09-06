export function CreateRoom1(pos: Vector3): void {



    //const Statue = new Entity()
    //engine.addEntity(Statue)
    //Statue.addComponent(new GLTFShape("Models/Obj_Statue.gltf"))
    //Statue.addComponent(new Transform({ position: pos }))
    //
    //const Counch = new Entity()
    //engine.addEntity(Counch)
    //Counch.addComponent(new GLTFShape("Models/Obj_Couch_Long.gltf"))
    //Counch.addComponent(new Transform({ position: pos }))
    //
    //const PlantRoot = new Entity()
    //engine.addEntity(PlantRoot)
    //PlantRoot.addComponent(new GLTFShape("Models/Obj_PlantRoot_Pot.gltf"))
    //PlantRoot.addComponent(new Transform({ position: pos }))
    //
    //const PlantRoot2 = new Entity()
    //engine.addEntity(PlantRoot2)
    //PlantRoot2.addComponent(new GLTFShape("Models/Obj_PlantRoot_Pot.gltf"))
    //PlantRoot2.addComponent(new Transform({ position: new Vector3(pos.x - 2, pos.y, pos.z) }))
    //
    //const Shelf = new Entity()
    //engine.addEntity(Shelf)
    //Shelf.addComponent(new GLTFShape("Models/Obj_Shelf001.gltf"))
    //Shelf.addComponent(new Transform({ position: pos }))
    //
    //const Shelf2 = new Entity()
    //engine.addEntity(Shelf2)
    //Shelf2.addComponent(new GLTFShape("Models/Obj_Shelf001.gltf"))
    //Shelf2.addComponent(new Transform({ position: new Vector3(pos.x - 4.55, pos.y, pos.z) }))
    //
    //const Table = new Entity()
    //engine.addEntity(Table)
    //Table.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
    //Table.addComponent(new Transform({ position: pos }))
    //
    //const TV = new Entity()
    //engine.addEntity(TV)
    //TV.addComponent(new GLTFShape("Models/Obj_TVStation.gltf"))
    //TV.addComponent(new Transform({ position: pos }))
    //
    //const Pot = new Entity()
    //engine.addEntity(Pot)
    //Pot.addComponent(new GLTFShape("Models/Obj_PlantRoot.gltf"))
    //Pot.addComponent(new Transform({ position: pos }))
    //
    //const Light = new Entity()
    //engine.addEntity(Light)
    //Light.addComponent(new GLTFShape("Models/Obj_Light_CeilingLamp_005.gltf"))
    //Light.addComponent(new Transform({ position: pos }))

}


export class Room_1 extends Entity {
    // public vars


    //init
    constructor(
        //local vars
        pos: Vector3
    ) {
        //init this
        super();
        engine.addEntity(this)
        this.addComponent(new GLTFShape("Models/Room_10x10_01.gltf"))
        this.addComponent(new Transform({ position: pos }))
    }
}