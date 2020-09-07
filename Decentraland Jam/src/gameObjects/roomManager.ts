import { CreateRoom } from "./rooms"
import { Trigger } from "./roomTrigger"

let x: number = 24;
let y: number = 24;
let roomSize: number = 10;

let room1: CreateRoom, room2: CreateRoom, room3: CreateRoom, room4: CreateRoom, room5: CreateRoom,
    room6: CreateRoom, room7: CreateRoom, room8: CreateRoom, room9: CreateRoom

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

    update() {
        if (room1.isInRoom == true) {
            engine.removeEntity(room1);
        }
        if (room2.isInRoom == true) {
            engine.removeEntity(room2);
        }
        if (room3.isInRoom == true) {
            engine.removeEntity(room3);
        }
        if (room4.isInRoom == true) {
            engine.removeEntity(room4);
        }
        if (room5.isInRoom == true) {
            engine.removeEntity(room5);
        }
        if (room6.isInRoom == true) {
            engine.removeEntity(room6);
        }
        if (room7.isInRoom == true) {
            engine.removeEntity(room7);
        }
        if (room8.isInRoom == true) {
            engine.removeEntity(room8);
        }
        if (room9.isInRoom == true) {
            engine.removeEntity(room9);
        }
    }


}

// Instance the input object
const input = Input.instance

// button down event
input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, false, (e) => {
    engine.removeEntity(room1);

})
