import utils from "../node_modules/decentraland-ecs-utils/index"

/// --- Set up a system ---

//class RotatorSystem {
//  // this group will contain every entity that has a Transform component
//  group = engine.getComponentGroup(Transform)
//
//  update(dt: number) {
//    // iterate over the entities of the group
//    for (let entity of this.group.entities) {
//      // get the Transform component of the entity
//      const transform = entity.getComponent(Transform)
//
//      // mutate the rotation
//      transform.rotate(Vector3.Up(), dt * 10)
//    }
//  }
//}

// Add a new instance of the system to the engine
//engine.addSystem(new RotatorSystem())

/// --- Spawner function ---

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

function spawnCube(x: number, y: number, z: number) {
  // create the entity
  const cube = new Entity()

  // add a transform to the entity
  cube.addComponent(new Transform({ position: new Vector3(x, y, z) }))

  // add a shape to the entity
    cube.addComponent(new SphereShape())

  // add the entity to the engine
  engine.addEntity(cube)

  return cube
}

/// --- Spawn a cube ---
//const cube = spawnCube(16, 1, 16)
//const cube2 = spawnCube(16, 4, 16)

//cube.addComponent(
//  new OnClick(() => {
//    cube.getComponent(Transform).scale.z *= 1.1
//    cube.getComponent(Transform).scale.x *= 0.9
//
//    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
//  })
//)

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



@Component("slerpData")
export class SlerpData {
    originRot: Quaternion = Quaternion.Euler(0, 90, 0)
    targetRot: Quaternion = Quaternion.Euler(0, 0, 0)
    fraction: number = 0
}

// a system to carry out the rotation
export class SlerpRotate implements ISystem {
    update(dt: number) {
        if (doIt) {
            let slerp = Door.getComponent(SlerpData)
            let transform = Door.getComponent(Transform)
            if (slerp.fraction < 1) {
                let rot = Quaternion.Slerp(
                    slerp.originRot,
                    slerp.targetRot,
                    slerp.fraction
                )
                transform.rotation = rot
                slerp.fraction += dt / 5
            }
        }
    }
}

// Add system to engine
engine.addSystem(new SlerpRotate())

let doIt: boolean = false;

const Door = new Entity()
Door.addComponent(new GLTFShape("Models/Obj_Door_002.gltf.glb"))
Door.addComponent(new Transform({ position: new Vector3(24, 0, 24) }))

Door.addComponent(new SlerpData())
Door.getComponent(SlerpData).originRot = Quaternion.Euler(0, 0, 0)
Door.getComponent(SlerpData).targetRot = Quaternion.Euler(0, 90, 0)

engine.addEntity(Door)

DoorOpen()

function DoorOpen() {


    Door.addComponent(
        new OnPointerDown(
            (e) => {
                //do thing here
                doIt = true;
            },
            { hoverText: "Open Door" }
        )
    )
}



