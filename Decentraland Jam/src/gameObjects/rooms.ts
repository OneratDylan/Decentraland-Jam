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

        let objNum: number

        this.num = Scalar.RandomRange(1, 4)
        this.num = Math.round(this.num)

        //Room One
        if (this.num == 1) {
            this.addComponent(new GLTFShape("Models/Room_10x10_01.gltf"))
            this.addComponent(new Transform({ position: pos }))

            //Bed
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const bed = new Entity()
                engine.addEntity(bed)
                bed.addComponent(new GLTFShape("Models/Obj_Bed.gltf"))
                bed.setParent(this)
            }

            //Desk
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const desk = new Entity()
                engine.addEntity(desk)
                desk.addComponent(new GLTFShape("Models/Obj_DeskStudy.gltf"))
                desk.setParent(this)
            }

            //Bedside
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const bedSide = new Entity()
                engine.addEntity(bedSide)
                bedSide.addComponent(new GLTFShape("Models/Obj_BedSideDrawer_collider.gltf"))
                bedSide.setParent(this)
            }

            //Bookshelf
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const bookshelf = new Entity()
                engine.addEntity(bookshelf)
                bookshelf.addComponent(new GLTFShape("Models/Obj_BookShelf.gltf"))
                bookshelf.setParent(this)
            }

            //Bush
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const bush = new Entity()
                engine.addEntity(bush)
                bush.addComponent(new GLTFShape("Models/Obj_Bush.gltf"))
                bush.setParent(this)
            }

            //Plant
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const root = new Entity()
                engine.addEntity(root)
                root.addComponent(new GLTFShape("Models/Obj_PlantRoot_Pot.gltf"))
                root.setParent(this)
            }

            //Shelf
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const shelf = new Entity()
                engine.addEntity(shelf)
                shelf.addComponent(new GLTFShape("Models/Obj_Shelf001.gltf"))
                shelf.setParent(this)
            }

            //Statue
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const statue = new Entity()
                engine.addEntity(statue)
                statue.addComponent(new GLTFShape("Models/Obj_Statue.gltf"))
                statue.setParent(this)
            }

            //Coffee Table
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const coffeeTable = new Entity()
                engine.addEntity(coffeeTable)
                coffeeTable.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
                coffeeTable.setParent(this)
            }

            //Top Shelf
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const topShelf = new Entity()
                engine.addEntity(topShelf)
                topShelf.addComponent(new GLTFShape("Models/Obj_TopShelf.gltf"))
                topShelf.setParent(this)
            }

            //TV
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const tv = new Entity()
                engine.addEntity(tv)
                tv.addComponent(new GLTFShape("Models/Obj_TVStation.gltf"))
                tv.setParent(this)
            }

            //Couch
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const couch = new Entity()
                engine.addEntity(couch)
                couch.addComponent(new GLTFShape("Models/Obj_Couch_Long_002.gltf"))
                couch.setParent(this)
            }

            //Couch Two
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const couchTwo = new Entity()
                engine.addEntity(couchTwo)
                couchTwo.addComponent(new GLTFShape("Models/Obj_Couch_Long.gltf"))
                couchTwo.setParent(this)
            }
        }

        //Room Two
        if (this.num == 2) {
            this.addComponent(new GLTFShape("Models/Room_10x10_02.gltf"))
            this.addComponent(new Transform({ position: pos }))

            //Couch Two
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const couchTwo = new Entity()
                engine.addEntity(couchTwo)
                couchTwo.addComponent(new GLTFShape("Models/Obj_Couch_Long.gltf"))
                couchTwo.setParent(this)
            }

            //TV
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const tv = new Entity()
                engine.addEntity(tv)
                tv.addComponent(new GLTFShape("Models/Obj_TVStation.gltf"))
                tv.setParent(this)
            }

            //Coffee Table
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const coffeeTable = new Entity()
                engine.addEntity(coffeeTable)
                coffeeTable.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
                coffeeTable.setParent(this)
            }
        }

        //Room Three
        if (this.num == 3) {
            this.addComponent(new GLTFShape("Models/Room_10x10_03.gltf"))
            this.addComponent(new Transform({ position: pos }))

            //Desk
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const desk = new Entity()
                engine.addEntity(desk)
                desk.addComponent(new GLTFShape("Models/Obj_DeskStudy.gltf"))
                desk.setParent(this)
            }


            //Kitchen bench
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const KCounter = new Entity()
                engine.addEntity(KCounter)
                KCounter.addComponent(new GLTFShape("Models/Obj_KitchenCounter.gltf"))
                KCounter.setParent(this)
            }
        }

        //Room Four
        if (this.num == 4) {
            this.addComponent(new GLTFShape("Models/Room_10x10_04.gltf"))
            this.addComponent(new Transform({ position: pos }))

            //Tree
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const tree = new Entity()
                engine.addEntity(tree)
                tree.addComponent(new GLTFShape("Models/Obj_Tree.gltf"))
                tree.setParent(this)
            }

        }


            const trigger = new Entity()
            engine.addEntity(trigger)
            trigger.addComponent(new Transform({ position: pos }))

            trigger.addComponent(new utils.TriggerComponent(
                new utils.TriggerBoxShape(new Vector3(10,10,10), Vector3.Zero()), //shape
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
