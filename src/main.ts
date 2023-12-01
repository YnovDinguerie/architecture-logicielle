import Rover from './Rover'
let rover = new Rover(0, { x: 1, y: 1 });
rover.move(1);
rover.turn(90)
rover.move(-1)
rover.turn(180)
rover.move(1)
rover.turn(-90)
rover.move(1)


console.log(rover)
