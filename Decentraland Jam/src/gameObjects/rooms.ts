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
            bed.setParent(this)

            const desk = new Entity()
            engine.addEntity(desk)
            desk.addComponent(new GLTFShape("Models/Obj_DeskStudy.gltf"))
            desk.setParent(this)

            const bestSide = new Entity()
            engine.addEntity(bestSide)
            bestSide.addComponent(new GLTFShape("Models/Obj_BedSideDrawer_collider.gltf"))
            bestSide.setParent(this)

            const bookshelf = new Entity()
            engine.addEntity(bookshelf)
            bookshelf.addComponent(new GLTFShape("Models/Obj_BookShelf.gltf"))
            bookshelf.setParent(this)

            //Bush
            //const bush = new Entity()
            //engine.addEntity(bush)
            //bush.addComponent(new GLTFShape("Models/Obj_Bush.gltf"))
            //bush.setParent(this)

            const root = new Entity()
            engine.addEntity(root)
            root.addComponent(new GLTFShape("Models/Obj_PlantRoot_Pot.gltf"))
            root.setParent(this)

            const shelf = new Entity()
            engine.addEntity(shelf)
            shelf.addComponent(new GLTFShape("Models/Obj_Shelf001.gltf"))
            shelf.setParent(this)

            const statue = new Entity()
            engine.addEntity(statue)
            statue.addComponent(new GLTFShape("Models/Obj_Statue.gltf"))
            statue.setParent(this)

            const coffeeTable = new Entity()
            engine.addEntity(coffeeTable)
            coffeeTable.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
            coffeeTable.setParent(this)

            const topShelf = new Entity()
            engine.addEntity(topShelf)
            topShelf.addComponent(new GLTFShape("Models/Obj_TopShelf.gltf"))
            topShelf.setParent(this)

            const tree = new Entity()
            engine.addEntity(tree)
            tree.addComponent(new GLTFShape("Models/Obj_Tree.gltf"))
            tree.setParent(this)

            const tv = new Entity()
            engine.addEntity(tv)
            tv.addComponent(new GLTFShape("Models/Obj_TVStation.gltf"))
            tv.setParent(this)

            const couch = new Entity()
            engine.addEntity(couch)
            couch.addComponent(new GLTFShape("Models/Obj_Couch_Long_002.gltf"))
            couch.setParent(this)
        }

        //Room Two
        if (this.num == 2) {
            this.addComponent(new GLTFShape("Models/Room_10x10_02.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const couch = new Entity()
            engine.addEntity(couch)
            couch.addComponent(new GLTFShape("Models/Obj_Couch_Long_002.gltf"))
            couch.setParent(this)
        }

        //Room Three
        if (this.num == 3) {
            this.addComponent(new GLTFShape("Models/Room_10x10_03.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const desk = new Entity()
            engine.addEntity(desk)
            desk.addComponent(new GLTFShape("Models/Obj_DeskStudy.gltf"))
            desk.setParent(this)
        }

        //Room Four
        if (this.num == 4) {
            this.addComponent(new GLTFShape("Models/Room_10x10_04.gltf"))
            this.addComponent(new Transform({ position: pos }))

            const KCounter = new Entity()
            engine.addEntity(KCounter)
            KCounter.addComponent(new GLTFShape("Models/Obj_KitchenCounter.gltf"))
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
