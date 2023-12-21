import { Orientation } from './Orientation';
import { Position } from './Position';
import Rover from './Rover'
import { Map } from './Map';
import { Obstacle } from './Obstacle';

const orientation = new Orientation(0)
const position = new Position(1, 1)
const map = new Map(5, 3)
let rover = new Rover(orientation, position, map);
const obstacle = new Obstacle({ x: 1, y: 1 })
map.addObstacle(obstacle)
rover.move(1);
rover.turn('right')
rover.move(-1)
rover.turn('right')
rover.move(1)
rover.turn('right')
rover.move(-1)



console.log(rover)
