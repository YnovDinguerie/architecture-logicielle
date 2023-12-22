import { Orientation } from './Orientation';
import { Position } from './Position';
import Rover from './Rover'
import { Planet } from './Planet';
import { Obstacle } from './Obstacle';

const orientation = new Orientation(0)
const position = new Position(1, 1)
const planet = new Planet(5, 3)
let rover = new Rover(orientation, position, planet);
const obstacle1 = new Obstacle({ x: 1, y: 1 })
const obstacle2 = new Obstacle({ x: 1, y: 5 })
planet.addObstacle(obstacle1)
planet.addObstacle(obstacle2)
rover.land()
rover.move(1);
rover.turn('right')
rover.move(-1)
rover.turn('right')
rover.move(1)
rover.turn('right')
rover.move(-1)



console.log(rover)

// TODO:
// Change Map with Planete class and implement Obstacle. Rover should detect Obstacle, stop and inform its position
// Refactor code with SOLID principle and orthogonality

// First, for each component, it should implement only one resposability
