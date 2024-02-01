import { Obstacle } from "../Obstacle";

// Entité
export class Planet {
	static addObstacle(arg0: { position: import("../Position").Position }) {
		throw new Error("Method not implemented.");
	}
	readonly width: number;
	readonly height: number;
	private readonly _obstacles: Obstacle[];

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this._obstacles = [];
	}

	/**
	 * Add an obstacle on the planet
	 * @param obstacle {Obstacle} - The Obstacle to add
	 * @return void
	 */
	addObstacle(obstacle: Obstacle) {
		this._obstacles.push(obstacle);
	}

	/**
	 * Check whether the planet has an obstacle at a given postion
	 * @param x - The x coordinates
	 * @param y - The y coordinates
	 * @return boolean
	 */
	hasObstacleAt(x: number, y: number): boolean {
		return this._obstacles.some(
			(obstacle) => obstacle.position.x === x && obstacle.position.y === y
		);
	}

	/**
	 * Check if there is any obstacles on the planet
	 */
	hasObstacle(): boolean {
		return this._obstacles.length > 0;
	}

	/**
	 * An array of Obstales on the planet
	 */
	obstacles(): Array<Obstacle> {
		return this._obstacles;
	}
}
