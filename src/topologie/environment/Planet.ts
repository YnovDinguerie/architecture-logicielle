import { Position } from "../Position";
import { Obstacle } from "./Obstacle";

export class Planet {
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
}
