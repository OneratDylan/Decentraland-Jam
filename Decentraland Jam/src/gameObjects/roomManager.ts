import { CreateRoom1 } from "./room_1"
import { CreateRoom2 } from "./room_2"
import { CreateRoom3 } from "./room_3"
import { CreateRoom4 } from "./room_4"

let x: number = 24;
let y: number = 24;
let roomSize: number = 10;

export class roomManager extends Entity implements ISystem
{
    constructor() {
        super();
        engine.addEntity(this)

        CreateRoom1(new Vector3(x, 0, y)); //middle room
        CreateRoom2(new Vector3(x, 0, y - roomSize)); // bottom room
        CreateRoom3(new Vector3(x, 0, y + roomSize)); // top room
        CreateRoom4(new Vector3(x - roomSize, 0, y)); // left room
        CreateRoom2(new Vector3(x + roomSize, 0, y)); // right room
        CreateRoom2(new Vector3(x + roomSize, 0, y + roomSize)); // top right
        CreateRoom2(new Vector3(x + roomSize, 0, y - roomSize)); // bottom right
        CreateRoom2(new Vector3(x - roomSize, 0, y - roomSize)); // bottom left
        CreateRoom2(new Vector3(x - roomSize, 0, y + roomSize)); // top left
    }

    update(dt: number) {

    }
}