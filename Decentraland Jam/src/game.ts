import { Door } from "./gameObjects/door";

import { SlerpData } from "./customcomponents";

/// --- Init Objs ---

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


MovePlayer()

function MovePlayer() {
    const respawner = new Entity()
    respawner.addComponent(new BoxShape())
    respawner.addComponent(new Transform({ position: new Vector3(8, 0, 8) }))

    let physicsCast = PhysicsCast.instance
    let rayFromCamera = physicsCast.getRayFromCamera(1000)
    
    respawner.addComponent(
        new OnPointerDown(
            (e) => {
                const camera = Camera.instance
                movePlayerTo({ x: 1, y: camera.position.y - 1, z: 1 })
            },
            { hoverText: "Move player" }
        )
    )

    engine.addEntity(respawner)
}

// a system to carry out the rotation
export class SlerpRotate implements ISystem {
    update(dt: number) {
        if (door.doIt) {
            let slerp = door.getComponent(SlerpData)
            let transform = door.getComponent(Transform)
            if (slerp.fraction < 1) {
                let rot = Quaternion.Slerp(
                    slerp.originRot,
                    slerp.targetRot,
                    slerp.fraction
                )
                transform.rotation = rot
                slerp.fraction += dt / 2
            }
        }
        if (door_2.doIt) {
            let slerp = door_2.getComponent(SlerpData)
            let transform = door_2.getComponent(Transform)
            if (slerp.fraction < 1) {
                let rot = Quaternion.Slerp(
                    slerp.originRot,
                    slerp.targetRot,
                    slerp.fraction
                )
                transform.rotation = rot
                slerp.fraction += dt / 2
            }
        }
    }
}
// Add system to engine
engine.addSystem(new SlerpRotate())

//Door One Init
const door = new Door(
    new GLTFShape("Models/Obj_Door_002.gltf.glb"),
    new Vector3(23.25, 0, 32)
);

door.addComponent(new SlerpData())
door.getComponent(SlerpData).originRot = Quaternion.Euler(0, 0, 0)
door.getComponent(SlerpData).targetRot = Quaternion.Euler(0, 90, 0)

//Door Two Init
const door_2 = new Door(
    new GLTFShape("Models/Obj_Door_002.gltf.glb"),
    new Vector3(23.25, 0, 16)
);

door_2.addComponent(new SlerpData())
door_2.getComponent(SlerpData).originRot = Quaternion.Euler(0, 0, 0)
door_2.getComponent(SlerpData).targetRot = Quaternion.Euler(0, 90, 0)








