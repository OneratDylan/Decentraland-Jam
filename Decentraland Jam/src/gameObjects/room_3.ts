export function CreateRoom3(pos: Vector3): void {

    const Room2 = new Entity()
    engine.addEntity(Room2)
    Room2.addComponent(new GLTFShape("Models/Room_10x10_03.gltf"))
    Room2.addComponent(new Transform({ position: pos }))
}