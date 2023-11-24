import Rover from './rover'
let rover = new Rover(0, { x: 0, y: 0 });
rover.move(1); // forward
rover.turn(90)

rover.move(-1) // backward


console.log(rover)
