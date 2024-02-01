import Rover from "../topologie/Rover";
import { Cardinals, Orientation } from "../topologie/Orientation";
import { Position } from "../topologie/Position";
import { Planet } from "../topologie/environment/Planet";
import { RoverError } from "../RoverError";
import { RoverBuilder } from "./utilities/RoverBuilder";

describe("Rover", () => {
	let roverBuilder: RoverBuilder;

	beforeEach(() => {
		roverBuilder = new RoverBuilder();
		Planet.addObstacle = jest.fn();
	});

	test("should land on the planet", () => {
		const rover = roverBuilder.Build();
		rover.land();
		expect(rover.orientation).toStrictEqual(new Orientation(Cardinals.Nord));
		expect(rover.position.x).toStrictEqual(0);
		expect(rover.position.y).toStrictEqual(0);
	});

	// test("should not move when there is an obstacle", () => {
	// 	const obstaclePosition = new Position(0, 1);
	// 	Planet.addObstacle({ position: obstaclePosition });

	// 	const rover = roverBuilder.Build();
	// 	rover.move(1);
	// 	expect(rover.position.x).toBe(0);
	// 	expect(rover.position.y).toBe(0);
	// });

	// test("should throw RoverError when there is an obstacle", () => {
	// 	const obstaclePosition = new Position(0, 1);
	// 	Planet.addObstacle({ position: obstaclePosition });

	// 	const rover = roverBuilder.Build();
	// 	expect(() => rover.move(1)).toThrow(RoverError);
	// });
});
