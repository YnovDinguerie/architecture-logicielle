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

  it('should move forward based on orientation', () => {
    rover.move(1);
    expect(rover.position).toEqual({ x: 0, y: 1 });
  });

  it('should move backward based on orientation', () => {
    rover.move(-1);
    expect(rover.position).toEqual({ x: 0, y: -1 });
  })
  
  it('should turn right', () => {
    rover.turn(90)
    expect(rover.orientation).toBe(90)
  })

  it('should turn left', () => {
    rover.turn(-90)
    expect(rover.orientation).toBe(-90)
  })
});
