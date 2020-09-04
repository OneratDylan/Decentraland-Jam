import { Door } from "./gameObjects/door";
import { CreateRoom1 } from "./gameObjects/room_1"
import { CreateRoom2 } from "./gameObjects/room_2"

import { SlerpData } from "./customcomponents";

/// --- Init Objs ---
let x: number = 24;
let y: number = 24;
let roomSize: number = 16;

CreateRoom1(new Vector3(x, 0, y));
CreateRoom2(new Vector3(x , 0, y - roomSize));

//Door One Init
const door = new Door(
    new GLTFShape("Models/Obj_Door_002.gltf.glb"),
    new Vector3(x - 0.75, 0, y + (roomSize/2)),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0)
);

//Door Two Init
const door_2 = new Door(
    new GLTFShape("Models/Obj_Door_002.gltf.glb"),
    new Vector3(x - 0.75, 0, y - (roomSize / 2) + .25),
    new Vector3(0, 0, 0),
    new Vector3(0, 90, 0)
);

function distance(pos1: Vector3, pos2: Vector3): number {
    const a = pos1.x - pos2.x
    const b = pos1.z - pos2.z
    return a * a + b * b
}

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

// a system to carry out the rotation
export class SlerpRotate implements ISystem {
    update(dt: number) {
        if (door.doIt) {
            let slerp = door.getComponent(SlerpData)
            let transform = door.getComponent(Transform)
            if (slerp.fraction < 1) {
                let rot = Quaternion.Slerp(
                    slerp.originRot,
                    slerp.targetRot,
                    slerp.fraction
                )
                transform.rotation = rot
                slerp.fraction += dt / 2
            }
        }
        if (door_2.doIt) {
            let slerp = door_2.getComponent(SlerpData)
            let transform = door_2.getComponent(Transform)
            if (slerp.fraction < 1) {
                let rot = Quaternion.Slerp(
                    slerp.originRot,
                    slerp.targetRot,
                    slerp.fraction
                )
                transform.rotation = rot
                slerp.fraction += dt / 2
            }
        }

        //distance
        const camera = Camera.instance
        if (distance(door.getComponent(Transform).position, camera.position) < 6) {
            door.doIt = true;
        }
        if (distance(door_2.getComponent(Transform).position, camera.position) < 6) {
            door_2.doIt = true;
        }
    }
}
// Add system to engine
engine.addSystem(new SlerpRotate())






