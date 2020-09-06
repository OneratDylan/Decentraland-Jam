import { CreateRoom } from "./rooms"

let x: number = 24;
let y: number = 24;
let roomSize: number = 10;
const input = Input.instance

let room1: Entity, room2: Entity, room3: Entity, room4: Entity, room5: Entity,
    room6: Entity, room7: Entity, room8: Entity, room9: Entity

let roomPositions: Array<Vector3> =
    [new Vector3(x, 0, y),
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

        room1 = new CreateRoom(roomPositions[0]); //middle room
        room2 = new CreateRoom(roomPositions[1]); // bottom room
        room3 = new CreateRoom(roomPositions[2]); // top room
        room4 = new CreateRoom(roomPositions[3]); // left room
        room5 = new CreateRoom(roomPositions[4]); // right room
        room6 = new CreateRoom(roomPositions[5]); // top right
        room7 = new CreateRoom(roomPositions[6]); // bottom right
        room8 = new CreateRoom(roomPositions[7]); // bottom left
        room9 = new CreateRoom(roomPositions[8]); // top left
    }

    update(dt: number) {

    }
}