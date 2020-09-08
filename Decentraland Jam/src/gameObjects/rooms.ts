import utils from "node_modules/decentraland-ecs-utils/index"
import { Door } from "./door";

export class CreateRoom extends Entity {
    // public vars

    public num: number

    public isInRoom: boolean = false;
    public stillInRoom: boolean = false;
    public lastDoor: Door;

    //init
    constructor(
        //local vars
        pos: Vector3
    ) {
        //init this
        super();
        engine.addEntity(this)

        let roomSounds: Array<string> =
            [
                "Audio/Ambience_Horror.mp3",
                "Audio/Ambience_Voices.mp3"
            ];

        let objNum: number

        this.num = Scalar.RandomRange(1, 4)
        this.num = Math.round(this.num)

        //Audio
        const clip = new AudioClip(roomSounds[Math.round(Scalar.RandomRange(0, roomSounds.length))])
        const source = new AudioSource(clip)
        this.addComponent(source)
        source.playing = true
        source.loop = true

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

                //audio 
                const clip = new AudioClip("Audio/static.mp3")
                const source = new AudioSource(clip)
                tv.addComponent(source)
                source.playing = true
                source.loop = true
                source.volume = .5

            }



            //Desk
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const desk = new Entity()
                engine.addEntity(desk)
                desk.addComponent(new GLTFShape("Models/Obj_DeskStudy.gltf"))
                desk.setParent(this)
            }
        }

        //Room Two
        if (this.num == 2) {
            this.addComponent(new GLTFShape("Models/Room_10x10_02.gltf"))
            this.addComponent(new Transform({ position: pos }))

            //Plant
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const root = new Entity()
                engine.addEntity(root)
                root.addComponent(new GLTFShape("Models/Obj_PlantRoot_Pot.gltf"))
                root.setParent(this)
            }

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

                //audio 
                const clip = new AudioClip("Audio/static.mp3")
                const source = new AudioSource(clip)
                tv.addComponent(source)
                source.playing = true
                source.loop = true
                source.volume = .5
            }

            //Coffee Table
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const coffeeTable = new Entity()
                engine.addEntity(coffeeTable)
                coffeeTable.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
                coffeeTable.setParent(this)
            }

            //Bush
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const bush = new Entity()
                engine.addEntity(bush)
                bush.addComponent(new GLTFShape("Models/Obj_Bush.gltf"))
                bush.setParent(this)
            }

            //Top Shelf
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const topShelf = new Entity()
                engine.addEntity(topShelf)
                topShelf.addComponent(new GLTFShape("Models/Obj_TopShelf.gltf"))
                topShelf.setParent(this)
            }
        }

        //Room Three _____KITCHEN_______
        if (this.num == 3) {
            this.addComponent(new GLTFShape("Models/Room_10x10_03.gltf"))
            this.addComponent(new Transform({ position: pos }))

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

            //Coffee Table
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const coffeeTable = new Entity()
                engine.addEntity(coffeeTable)
                coffeeTable.addComponent(new GLTFShape("Models/Obj_Table_Coffee.gltf"))
                coffeeTable.setParent(this)
            }

            //Kitchen bench
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const KCounter = new Entity()
                engine.addEntity(KCounter)
                KCounter.addComponent(new GLTFShape("Models/Obj_KitchenCounter.gltf"))
                KCounter.setParent(this)
            }

            //Top Shelf
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const topShelf = new Entity()
                engine.addEntity(topShelf)
                topShelf.addComponent(new GLTFShape("Models/Obj_TopShelf.gltf"))
                topShelf.setParent(this)
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

        //Room Four grass
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

            //Statue
            objNum = Scalar.RandomRange(1, 4)
            if (objNum < 2) {
                const statue = new Entity()
                engine.addEntity(statue)
                statue.addComponent(new GLTFShape("Models/Obj_Statue.gltf"))
                statue.setParent(this)
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
