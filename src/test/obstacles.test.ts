import Rover from "../topologie/Rover";
import { Cardinals, Orientation } from "../topologie/Orientation";
import { Position } from "../topologie/Position";
import { Planet } from "../topologie/environment/Planet";
import { Obstacle } from "../topologie/environment/Obstacle";

test("should not move when there is an obstacle", () => {
	const planet = new Planet(20, 15);

	const obstacles: Obstacle[] = [
		new Obstacle({ x: 0, y: 1 }),
		new Obstacle({ x: 1, y: 0 }),
	];

	const positions: Position[] = [
		{ x: 0, y: 0 },
		{ x: 5, y: 5 },
		{ x: 10, y: 10 },
	];

	const orientations: Orientation[] = [
		new Orientation(Cardinals.Nord),
		new Orientation(Cardinals.Est),
		new Orientation(Cardinals.Sud),
		new Orientation(Cardinals.Ouest),
	];

	orientations.forEach(orientation => {
		positions.forEach(position => {
			obstacles.forEach(obstacle => {
				const rover = new Rover(orientation, position, planet);
				planet.addObstacle(obstacle);
				rover.move(1);
				expect(rover.position.x).toBe(position.x);
				expect(rover.position.y).toBe(position.y);
			});
		});
	});
});
