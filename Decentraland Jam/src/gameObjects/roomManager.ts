import { CreateRoom } from "./rooms"

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
            room1.stillInRoom = true;
        }
        if (room1.stillInRoom == true) {
            if (room1.isInRoom == false) {
                room1.stillInRoom = false
                engine.removeEntity(room1);
                room1 = new CreateRoom(roomPositions[0]); 
            }
        }
        //------------------------------------------------------------//
        if (room2.isInRoom == true) {
            room2.stillInRoom = true;
        }
        if (room2.stillInRoom == true) {
            if (room2.isInRoom == false) {
                room2.stillInRoom = false
                engine.removeEntity(room2);
                room2 = new CreateRoom(roomPositions[1]); 
            }
        }
        //------------------------------------------------------------//
        if (room3.isInRoom == true) {
            room3.stillInRoom = true;
        }
        if (room3.stillInRoom == true) {
            if (room3.isInRoom == false) {
                room3.stillInRoom = false
                engine.removeEntity(room3);
                room3 = new CreateRoom(roomPositions[2]); 
            }
        }
        //------------------------------------------------------------//
        if (room4.isInRoom == true) {
            room4.stillInRoom = true;
        }
        if (room4.stillInRoom == true) {
            if (room4.isInRoom == false) {
                room4.stillInRoom = false
                engine.removeEntity(room4);
                room4 = new CreateRoom(roomPositions[3]); 
            }
        }
        //------------------------------------------------------------//
        if (room5.isInRoom == true) {
            room5.stillInRoom = true;
        }
        if (room5.stillInRoom == true) {
            if (room5.isInRoom == false) {
                room5.stillInRoom = false
                engine.removeEntity(room5);
                room5 = new CreateRoom(roomPositions[4]); 
            }
        }
        //------------------------------------------------------------//
        if (room6.isInRoom == true) {
            room6.stillInRoom = true;
        }
        if (room6.stillInRoom == true) {
            if (room6.isInRoom == false) {
                room6.stillInRoom = false
                engine.removeEntity(room6);
                room6 = new CreateRoom(roomPositions[5]); 
            }
        }
        //------------------------------------------------------------//
        if (room7.isInRoom == true) {
            room7.stillInRoom = true;
        }
        if (room7.stillInRoom == true) {
            if (room7.isInRoom == false) {
                room7.stillInRoom = false
                engine.removeEntity(room7);
                room7 = new CreateRoom(roomPositions[6]);
            }
        }
        //------------------------------------------------------------//
        if (room8.isInRoom == true) {
            room8.stillInRoom = true;
        }
        if (room8.stillInRoom == true) {
            if (room8.isInRoom == false) {
                room8.stillInRoom = false
                engine.removeEntity(room8);
                room8 = new CreateRoom(roomPositions[7]);
            }
        }
        //------------------------------------------------------------//
        if (room9.isInRoom == true) {
            room9.stillInRoom = true;
        }
        if (room9.stillInRoom == true) {
            if (room9.isInRoom == false) {
                room9.stillInRoom = false
                engine.removeEntity(room9);
                room9 = new CreateRoom(roomPositions[8]);
            }
        }
    }


}
