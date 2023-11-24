import Rover from "./rover";

describe('Rover Class Tests', () => {
  let rover: Rover;
  const initialPosition = { x: 0, y: 0 };

  beforeEach(() => {
    rover = new Rover(0, initialPosition);
  });

  it('should initialize with correct orientation and position', () => {
    expect(rover.orientation).toBe(0);
    expect(rover.position).toEqual(initialPosition);
  });

//   it('should turn to the specified orientation', () => {
//     rover.turn();
//     expect(rover.orientation).toBe(2);

//     rover.turn(Orientation.Est);
//     expect(rover.orientation).toBe(1);
//   });

  it('should move forward or backward correctly based on orientation', () => {
    rover.move(1);
    expect(rover.position).toEqual({ x: 0, y: 1 });
  });

  // Add more test cases as needed for other scenarios
});
