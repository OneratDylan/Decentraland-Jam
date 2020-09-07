import utils from "node_modules/decentraland-ecs-utils/index"

export class Door extends Entity {
    constructor(
        size: Vector3,
        pos: Vector3
    ) {
        //create entity
        super();
        engine.addEntity(this)

        //create shape for entity and disable its collision
        this.addComponent(new BoxShape())
        this.getComponent(BoxShape).withCollisions = false

        //set transform component with initial position
        this.addComponent(new Transform({ position: pos, scale: size}))

        // create trigger area object, setting size and relative position
        let triggerBox = new utils.TriggerBoxShape(Vector3.One(), Vector3.Zero())

        //create trigger for entity
        this.addComponent(
            new utils.TriggerComponent(
                triggerBox, //shape
                0, //layer
                0, //triggeredByLayer
                null, //onTriggerEnter
                null, //onTriggerExit
                () => {
                    //onCameraEnter
                    log("triggered!")
                    this.getComponent(Transform).position = new Vector3(
                        1 + Math.random() * 14,
                        0,
                        1 + Math.random() * 14
                    )
                },
            null //onCameraExit
        ))
    }
}

