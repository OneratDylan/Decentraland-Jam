import { Room_1 } from "./room_1"
import { Room_2 } from "./room_2"
import { Room_3 } from "./room_3"
import { Room_4 } from "./room_4"

let x: number = 24;
let y: number = 24;
let roomSize: number = 10;

let room1: Entity
let room2: Entity
let room3: Entity
let room4: Entity
let room5: Entity
let room6: Entity
let room7: Entity
let room8: Entity
let room9: Entity

export class roomManager extends Entity implements ISystem
{
    constructor() {
        super();
        engine.addEntity(this)

        new Room_1(new Vector3(x, 0, y)); //middle room
        new Room_2(new Vector3(x, 0, y - roomSize)); // bottom room
        new Room_3(new Vector3(x, 0, y + roomSize)); // top room
        new Room_4(new Vector3(x - roomSize, 0, y)); // left room
        new Room_2(new Vector3(x + roomSize, 0, y)); // right room
        new Room_4(new Vector3(x + roomSize, 0, y + roomSize)); // top right
        new Room_2(new Vector3(x + roomSize, 0, y - roomSize)); // bottom right
        new Room_1(new Vector3(x - roomSize, 0, y - roomSize)); // bottom left
        new Room_1(new Vector3(x - roomSize, 0, y + roomSize)); // top left
    }

    update(dt: number) {

    }
}