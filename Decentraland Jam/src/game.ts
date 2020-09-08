import { Door } from "./gameObjects/door";
import { roomManager } from "./gameObjects/roomManager"
import { HouseBoarder } from "./gameObjects/houseBoarder"
import utils from "node_modules/decentraland-ecs-utils/index"

/// --- Init Objs ---
let x: number = 24;
let y: number = 24;
let roomSize: number = 10;

engine.addSystem(new roomManager())

new HouseBoarder()

//inner top start
engine.addSystem(new Door(
    new Vector3(x - .79, 0, y + (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x - .79 + roomSize, 0, y + (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x - .79 - roomSize, 0, y + (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))
//inner top end

//inner bottom start
//Door Two Init
engine.addSystem(new Door(
    new Vector3(x - .79, 0, y - (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x - .79 + roomSize, 0, y - (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x - .79 - roomSize, 0, y - (roomSize / 2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))
//inner bottom end

//inner left start
//Door Three Init
engine.addSystem(new Door(
    new Vector3(x - (roomSize / 2), 0, y + .79),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x - (roomSize / 2), 0, y + .79 + roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x - (roomSize / 2), 0, y + .79 - roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    false))
//inner left end

//inner right start
//Door Four Init
engine.addSystem(new Door(
    new Vector3(x + (roomSize / 2), 0, y + .79),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x + (roomSize / 2), 0, y + .79 - roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    false))

engine.addSystem(new Door(
    new Vector3(x + (roomSize / 2), 0, y + .79 + roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    false))
//inner right end

//out right start
//Door Four Init
engine.addSystem(new Door(
    new Vector3(x + (roomSize / 2) * 3, 0, y + .79),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    true))

engine.addSystem(new Door(
    new Vector3(x + (roomSize / 2) * 3, 0, y + .79 + roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    true))

engine.addSystem(new Door(
    new Vector3(x + (roomSize / 2) * 3, 0, y + .79 - roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    true))
//out right end 

//out left start
//Door five Init
engine.addSystem(new Door(
    new Vector3(x - (roomSize / 2) *3, 0, y + .79),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    true))

engine.addSystem(new Door(
    new Vector3(x - (roomSize / 2) * 3, 0, y + .79 + roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    true))

engine.addSystem(new Door(
    new Vector3(x - (roomSize / 2) * 3, 0, y + .79 - roomSize),
    new Vector3(0, 90, 0),
    new Vector3(0, 0, 0),
    true))
//out left end

//out top start
//Door six init
engine.addSystem(new Door(
    new Vector3(x - .79, 0, y + (roomSize / 2) * 3),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    true))

engine.addSystem(new Door(
    new Vector3(x - .79 - roomSize, 0, y + (roomSize / 2) * 3),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    true))

engine.addSystem(new Door(
    new Vector3(x - .79 + roomSize, 0, y + (roomSize / 2) * 3),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    true))
//out top end

//out bottom start 
//Door seven Init
engine.addSystem(new Door(
    new Vector3(x - .79, 0, y - (roomSize / 2) * 3),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    false))

//Door eight Init
engine.addSystem(new Door(
    new Vector3(x - .79 - (roomSize), 0, y - (roomSize / 2) * 3),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    true))

//Door nine Init
engine.addSystem(new Door(
    new Vector3(x - .79 + (roomSize), 0, y - (roomSize / 2) * 3),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0),
    true))
//out bottom end 

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