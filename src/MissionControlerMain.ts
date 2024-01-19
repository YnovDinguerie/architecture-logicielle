import { Interpreter } from "./communication/Interpreter"
import { Orientation } from "./topologie/Orientation"
import { Position } from "./topologie/Position"
import Rover from "./topologie/Rover"
import { Planet } from "./topologie/environment/Planet"

const orientation = new Orientation(0)
const position = new Position(1, 1)
const planet = new Planet(5, 3)
let rover = new Rover(orientation, position, planet);
// const interpreter = new Interpreter(rover)

