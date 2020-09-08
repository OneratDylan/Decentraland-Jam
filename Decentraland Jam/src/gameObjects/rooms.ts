import utils from "node_modules/decentraland-ecs-utils/index"

export class CreateRoom extends Entity {
    // public vars

    public num: number
    public isInRoom: boolean = false;
    public stillInRoom: boolean = false;

    //init
    constructor(
        //local vars
        pos: Vector3
    ) {
        //init this
        super();
        engine.addEntity(this)

        this.num = Scalar.RandomRange(1, 4)
        this.num = Math.round(this.num)

        //Room One
        if (this.num == 1) {
            this.addComponent(new GLTFShape("Models/Room_10x10_01.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const bed = new Entity()
            engine.addEntity(bed)
            bed.addComponent(new GLTFShape("Models/Obj_Bed.gltf"))
            //bed.addComponent(new Transform({ position: pos }))
            bed.setParent(this)

        }
        //Room Two
        if (this.num == 2) {
            this.addComponent(new GLTFShape("Models/Room_10x10_02.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const couch = new Entity()
            engine.addEntity(couch)
            couch.addComponent(new GLTFShape("Models/Obj_Couch_Long_002.gltf"))
            //couch.addComponent(new Transform({ position: pos }))
            couch.setParent(this)
        }
        //Room Three
        if (this.num == 3) {
            this.addComponent(new GLTFShape("Models/Room_10x10_03.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const desk = new Entity()
            engine.addEntity(desk)
            desk.addComponent(new GLTFShape("Models/Obj_DeskStudy.gltf"))
            //desk.addComponent(new Transform({ position: pos }))
            desk.setParent(this)
        }
        //Room Four
        if (this.num == 4) {
            this.addComponent(new GLTFShape("Models/Room_10x10_04.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const KCounter = new Entity()
            engine.addEntity(KCounter)
            KCounter.addComponent(new GLTFShape("Models/Obj_KitchenCounter.gltf"))
            //KCounter.addComponent(new Transform({ position: pos }))
            KCounter.setParent(this)
        }


            const trigger = new Entity()
            engine.addEntity(trigger)
            trigger.addComponent(new Transform({ position: pos }))

            trigger.addComponent(new utils.TriggerComponent(
                new utils.TriggerBoxShape(new Vector3(10,8,10), Vector3.Zero()), //shape
                0, //layer
                0, //triggeredByLayer
                null, //onTriggerEnter
                null, //onTriggerExit
                (): void => {
                    //onCameraEnter
                    this.isInRoom = true;
                },
                (): void => {
                    //onCameraEnter
                    this.isInRoom = false;
                }
            ))
        
    }
}
