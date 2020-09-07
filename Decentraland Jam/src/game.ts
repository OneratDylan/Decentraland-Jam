import { Door } from "./gameObjects/door";
import { roomManager } from "./gameObjects/roomManager"
import utils from "node_modules/decentraland-ecs-utils/index"

/// --- Init Objs ---
let x: number = 24;
let y: number = 24;
let roomSize: number = 10;

engine.addSystem(new roomManager())

engine.addSystem(new Door(
    new GLTFShape("Models/Obj_Door_001.gltf"),
    new Vector3(x - .79, 0, y + (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    new AnimationState("Obj_Door_Open", { looping: false })))

//Door Two Init
engine.addSystem(new Door(
    new GLTFShape("Models/Obj_Door_002.gltf"),
    new Vector3(x - .79, 0, y - (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    new AnimationState("Obj_Door_Open", { looping: false })))

//Door Three Init
engine.addSystem(new Door(
    new GLTFShape("Models/Obj_Door_003.gltf"),
    new Vector3(x - (roomSize / 2), 0, y + .79),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    new AnimationState("Obj_Door_Open", { looping: false })))

//Door Three Init
engine.addSystem(new Door(
    new GLTFShape("Models/Obj_Door_004.gltf"),
    new Vector3(x + (roomSize / 2), 0, y + .79),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    new AnimationState("Obj_Door_Open", { looping: false })))

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
                movePlayerTo({ x: 24, y: camera.position.y - 1, z: 24 })
            },
            { hoverText: "Move player" }
        )
    )

    engine.addEntity(respawner)
}

//createTrigger(new Vector3(0,0,0), new Vector3(10,10, 10))
//function createTrigger(pos: Vector3, size: Vector3) {
//    const trigger = new Entity()
//    engine.addEntity(trigger)
//    trigger.addComponent(new Transform({ position: pos }))
//
//    trigger.addComponent(new utils.TriggerComponent(
//        new utils.TriggerBoxShape(size, Vector3.Zero()), //shape
//        0, //layer
//        0, //triggeredByLayer
//        null, //onTriggerEnter
//        null, //onTriggerExit
//        (): void => {
//            //onCameraEnter
//            const camera = Camera.instance
//            movePlayerTo({ x: 24, y: camera.position.y - 1, z: 24 })
//        },
//        null
//    ))
//}