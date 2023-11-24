import Rover from "./rover";

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});  // PASS

beforeAll(() => {

})

const rover = new Rover(0, { x: 0, y: 0 })

test('Rover should go forward', () => {
    // const rover = new Rover(0, { x: 0, y: 0 })
    rover.move(1)
    expect(rover.position).toEqual({ x: 0, y: 1 });
});

test('Rover should turn right', () => {

})
