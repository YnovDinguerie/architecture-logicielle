import { Orientation } from './topologie/Orientation';
import { Position } from './topologie/Position';
import { Planet } from './topologie/environment/Planet';
import { Obstacle } from './topologie/Obstacle';
import Rover from './topologie/Rover';

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
