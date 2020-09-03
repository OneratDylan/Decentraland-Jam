
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
testCube.addComponent(new GLTFShape("Models/Test_Cube.glb"))
testCube.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
testCube.getComponent(Transform).scale.z = .5
testCube.getComponent(Transform).scale.y = .5
testCube.getComponent(Transform).scale.x = .5

const TestDoor = new Entity()
engine.addEntity(TestDoor)
TestDoor.addComponent(new GLTFShape("Models/Door_Test_1.glb"))
TestDoor.addComponent(new Transform({ position: new Vector3(0, 0, 0) }))
TestDoor.getComponent(Transform).scale.z = .5
TestDoor.getComponent(Transform).scale.y = .5
TestDoor.getComponent(Transform).scale.x = .5

const respawner = new Entity()
engine.addEntity(respawner)
respawner.addComponent(new SphereShape())
respawner.addComponent(new Transform({ position: new Vector3(0, 0, 2) }))

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
const cube = spawnCube(16, 1, 16)
const cube2 = spawnCube(16, 4, 16)

cube.addComponent(
  new OnClick(() => {
    cube.getComponent(Transform).scale.z *= 1.1
    cube.getComponent(Transform).scale.x *= 0.9

    spawnCube(Math.random() * 8 + 1, Math.random() * 8, Math.random() * 8 + 1)
  })
)

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




