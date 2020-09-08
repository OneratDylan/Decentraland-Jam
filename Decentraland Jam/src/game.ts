import { roomManager } from "./gameObjects/roomManager"
import { HouseBoarder } from "./gameObjects/houseBoarder"
import { PlaceDoors } from "./gameObjects/doorPlacement"

engine.addSystem(new roomManager())
new HouseBoarder()
new PlaceDoors()
