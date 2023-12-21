import { Obstacle } from "./Obstacle";

export class Map {

    readonly width;
    readonly height;
    private readonly _obstacles: Obstacle[];

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this._obstacles = [];
    }

    addObstacle(obstacle: Obstacle): void {
        this._obstacles.push(obstacle);
    }

    hasObstacleAt(x: number, y: number): boolean {
        return this._obstacles.some(obstacle => obstacle.position.x === x && obstacle.position.y === y);
    }
}
