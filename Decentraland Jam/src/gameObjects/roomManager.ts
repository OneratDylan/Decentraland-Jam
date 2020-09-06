import { CreateRoom } from "./rooms"

let x: number = 24;
let y: number = 24;
let roomSize: number = 10;
const input = Input.instance

let room1: Entity
let room2: Entity
let room3: Entity
let room4: Entity
let room5: Entity
let room6: Entity
let room7: Entity
let room8: Entity
let room9: Entity

let roomPositions: Array<Vector3> = [new Vector3(x, 0, y),
    new Vector3(x, 0, y - roomSize),
    new Vector3(x, 0, y + roomSize),
    new Vector3(x - roomSize, 0, y),
    new Vector3(x + roomSize, 0, y),
    new Vector3(x + roomSize, 0, y + roomSize),
    new Vector3(x + roomSize, 0, y - roomSize),
    new Vector3(x - roomSize, 0, y - roomSize),
    new Vector3(x - roomSize, 0, y + roomSize)
];

export class roomManager extends Entity implements ISystem
{
    constructor() {
        super();
        engine.addEntity(this)

        room1 = new CreateRoom(new Vector3(x, 0, y)); //middle room
        room2 = new CreateRoom(new Vector3(x, 0, y - roomSize)); // bottom room
        room3 = new CreateRoom(new Vector3(x, 0, y + roomSize)); // top room
        room4 = new CreateRoom(new Vector3(x - roomSize, 0, y)); // left room
        room5 = new CreateRoom(new Vector3(x + roomSize, 0, y)); // right room
        room6 = new CreateRoom(new Vector3(x + roomSize, 0, y + roomSize)); // top right
        room7 = new CreateRoom(new Vector3(x + roomSize, 0, y - roomSize)); // bottom right
        room8 = new CreateRoom(new Vector3(x - roomSize, 0, y - roomSize)); // bottom left
        room9 = new CreateRoom(new Vector3(x - roomSize, 0, y + roomSize)); // top left
    }

    update(dt: number) {

        input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, (e) => {
            engine.removeEntity(room1)
            engine.removeEntity(room2)
            engine.removeEntity(room3)
            engine.removeEntity(room4)
            engine.removeEntity(room5)
            engine.removeEntity(room6)
            engine.removeEntity(room7)
        })
    }
}