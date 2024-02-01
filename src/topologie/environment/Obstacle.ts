import { Position } from "../Position";

export class Obstacle {
    public readonly position: Position;
    constructor(position: Position) {
        this.position = position;
    }

    checkObstacle(roverPosition: Position): boolean {
        return this.position.x === roverPosition.x && this.position.y === roverPosition.y;
    }
}
