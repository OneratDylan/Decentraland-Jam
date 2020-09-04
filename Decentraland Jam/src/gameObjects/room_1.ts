export function CreateRoom1(): void {

    const testCube = new Entity()
    engine.addEntity(testCube)
    testCube.addComponent(new GLTFShape("Models/Room_001.gltf"))
    testCube.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const Statue = new Entity()
    engine.addEntity(Statue)
    Statue.addComponent(new GLTFShape("Models/Obj_Statue.gltf"))
    Statue.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const Counch = new Entity()
    engine.addEntity(Counch)
    Counch.addComponent(new GLTFShape("Models/Obj_Couch_Long.gltf"))
    Counch.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const PlantRoot = new Entity()
    engine.addEntity(PlantRoot)
    PlantRoot.addComponent(new GLTFShape("Models/Obj_PlantRoot_01.gltf"))
    PlantRoot.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const Shelf = new Entity()
    engine.addEntity(Shelf)
    Shelf.addComponent(new GLTFShape("Models/Shelf001.gltf"))
    Shelf.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const Table = new Entity()
    engine.addEntity(Table)
    Table.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
    Table.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const TV = new Entity()
    engine.addEntity(TV)
    TV.addComponent(new GLTFShape("Models/Obj_TVStation.gltf"))
    TV.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const Pot = new Entity()
    engine.addEntity(Pot)
    Pot.addComponent(new GLTFShape("Models/Obj_PlantRoot.gltf"))
    Pot.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

    const Light = new Entity()
    engine.addEntity(Light)
    Light.addComponent(new GLTFShape("Models/Obj_Light_CeilingLamp_005.gltf"))
    Light.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))
}