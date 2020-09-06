import { Door } from "./gameObjects/door";
import { CreateRoom1 } from "./gameObjects/room_1"
import { CreateRoom2 } from "./gameObjects/room_2"
import { CreateRoom3 } from "./gameObjects/room_3"
import { CreateRoom4 } from "./gameObjects/room_4"

/// --- Init Objs ---
let x: number = 24;
let y: number = 24;
let roomSize: number = 10;

let randomVal: number
randomVal = Scalar.RandomRange(0, 5)
CreateRoom1(new Vector3(x, 0, y));
CreateRoom2(new Vector3(x , 0, y - roomSize));
CreateRoom3(new Vector3(x, 0, y + roomSize));
CreateRoom4(new Vector3(x - roomSize, 0, y));
CreateRoom2(new Vector3(x + roomSize, 0, y));
CreateRoom2(new Vector3(x + roomSize, 0, y + roomSize));
CreateRoom2(new Vector3(x + roomSize, 0, y - roomSize));
CreateRoom2(new Vector3(x - roomSize, 0, y - roomSize));
CreateRoom2(new Vector3(x - roomSize, 0, y + roomSize));

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