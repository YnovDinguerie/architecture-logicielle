import { Orientation } from './Orientation';
import { Position } from './Position';
import Rover from './Rover'
import { Map } from './Map';

const orientation = new Orientation(0)
const position = new Position(1, 1)
const map = new Map(5, 3)
let rover = new Rover(orientation, position, map);
rover.move(1);
rover.turn('right')
rover.move(-1)
rover.turn('right')
rover.move(1)
rover.turn('right')
rover.move(-1)


console.log(rover)

// class Point {
//     #y: any;
//     #x: any;
//     constructor(x, y) {
//         this.#x = x;
//         this.#y = y;
//     }

//     #calculateManhattanDistance(otherPoint) {
//         const deltaX = Math.abs(this.#x - otherPoint.#x);
//         const deltaY = Math.abs(this.#y - otherPoint.#y);
//         return deltaX + deltaY;
//     }

//     calculateDistance(otherPoint) {
//         if (!(otherPoint instanceof Point)) {
//             throw new Error('L\'argument doit être une instance de Point');
//         }

//         return this.#calculateManhattanDistance(otherPoint);
//     }
// }

// const point1 = new Point(0, 0);
// const point2 = new Point(6, 6);

// const distance = point1.calculateDistance(point2);
// console.log(point1)
// console.log(point2)
// console.log(`La distance de Manhattan entre les deux points est : ${distance}`);
