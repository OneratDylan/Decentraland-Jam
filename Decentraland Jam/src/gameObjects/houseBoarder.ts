export class HouseBoarder extends Entity {

    constructor() {
        super();
        engine.addEntity(this)
        this.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement03.gltf"))
        this.addComponent(new Transform({ position: new Vector3(4.5, 0, 4.5), scale: new Vector3(.49, .49, .49) }))

        const bed = new Entity()
        engine.addEntity(bed)
        bed.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement02.gltf"))
        bed.addComponent(new Transform({ position: new Vector3(16, 0, 0) }))
        bed.setParent(this)

        const lawn2 = new Entity()
        engine.addEntity(lawn2)
        lawn2.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement01.gltf"))
        lawn2.addComponent(new Transform({ position: new Vector3(16 * 5, 0, 16) }))
        lawn2.setParent(this)

        const lawn3 = new Entity()
        engine.addEntity(lawn3)
        lawn3.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement03.gltf"))
        lawn3.addComponent(new Transform({ position: new Vector3(0, 0, 16 * 2) }))
        lawn3.setParent(this)

        const lawn4 = new Entity()
        engine.addEntity(lawn4)
        lawn4.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement01.gltf"))
        lawn4.addComponent(new Transform({ position: new Vector3(16 * 5, 0, 16 * 3) }))
        lawn4.setParent(this)

        const lawn5 = new Entity()
        engine.addEntity(lawn5)
        lawn5.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement02.gltf"))
        lawn5.addComponent(new Transform({ position: new Vector3(16 * 5, 0, 16 * 4) }))
        lawn5.setParent(this)

        const lawn6 = new Entity()
        engine.addEntity(lawn6)
        lawn6.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement01.gltf"))
        lawn6.addComponent(new Transform({ position: new Vector3(0, 0, 16 * 5) }))
        lawn6.setParent(this)

        const lawn7 = new Entity()
        engine.addEntity(lawn7)
        lawn7.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement03.gltf"))
        lawn7.addComponent(new Transform({ position: new Vector3(16, 0, 16 * 5) }))
        lawn7.setParent(this)

        const lawn8 = new Entity()
        engine.addEntity(lawn8)
        lawn8.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement02.gltf"))
        lawn8.addComponent(new Transform({ position: new Vector3(16 * 2, 0, 16 * 5) }))
        lawn8.setParent(this)

        const lawn9 = new Entity()
        engine.addEntity(lawn9)
        lawn9.addComponent(new GLTFShape("Models/Layout_OutdoorArrangement01.gltf"))
        lawn9.addComponent(new Transform({ position: new Vector3(16 * 4, 0,0) }))
        lawn9.setParent(this)
    }
}