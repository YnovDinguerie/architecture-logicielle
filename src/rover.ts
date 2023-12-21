import { Position } from "./Position";
import { Cardinals, Orientation } from "./Orientation";
import { Map } from "./Map";

class Rover {

    private readonly _map: Map;
    private readonly _orientation: Orientation;

    public readonly position: Position;
    static Nord: Rover;

    constructor(orientation: Orientation, position: Position, map: Map) {
        this._orientation = orientation;
        this.position = position;
        this._map = map;
    }

    turn(direction: 'right' | 'left') {
        this._orientation.turn(direction)
    }

    canMove(direction: 1 | -1): boolean {
        const newPosition = this.calculateNewPosition(direction);
        const hasObstacle = this._map.hasObstacleAt(newPosition.x, newPosition.y);

        if (hasObstacle) {
            console.log("Il y a un obstacle à la prochaine position. Le rover ne peut pas se déplacer.");
            return false;
        }

        return true;
    }

    move(direction: 1 | -1): Rover {
        if (this.canMove(direction)) {
            const newPosition = this.calculateNewPosition(direction);
            console.log(newPosition);

            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }

        return this;
    }

    private calculateNewPosition(direction: 1 | -1): Position {
        const movementMap: Record<Cardinals, Position> = {
            [Cardinals.Nord]: { x: this.position.x, y: this.position.y + direction },
            [Cardinals.Sud]: { x: this.position.x, y: this.position.y - direction },
            [Cardinals.Est]: { x: this.position.x + direction, y: this.position.y },
            [Cardinals.Ouest]: { x: this.position.x - direction, y: this.position.y },
        };

        const newPosition: Position = movementMap[this._orientation.getOrientation()];
        return {
            x: (newPosition.x + this._map.width) % this._map.width,
            y: (newPosition.y + this._map.height) % this._map.height,
        };
    }



    stop(): void {
        console.log("Rover s'est arrêté.");
    }
}

export default Rover



