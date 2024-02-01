import { Position } from "../Position";
import { Obstacle } from "./Obstacle";

export class Planet {
<<<<<<< HEAD
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
=======
    readonly width;
    readonly height;
    private readonly _obstacles: Obstacle[];
    private _foundedObstacles: Position[];

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this._obstacles = [];
        this._foundedObstacles = []
    }

    addObstacle(obstacle: Obstacle): void {
        this._obstacles.push(obstacle);
    }

    checkObstacleAtPosition(position: Position): boolean {
        const hasObstacle = this._obstacles.some(obstacle => obstacle.checkObstacle(position));
        if (hasObstacle) {
            this.addFoundedObstacle(position)
        }
        return hasObstacle
    }

    addFoundedObstacle(position: Position) {
        if (!this._foundedObstacles.some(existingPosition => existingPosition.x === position.x && existingPosition.y === position.y)) {
            this._foundedObstacles.push(position);
        }
    }
>>>>>>> 38c5a9003fb2f681c304059220b83d2a0bcabe18
}
