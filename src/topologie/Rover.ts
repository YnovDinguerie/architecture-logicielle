import { Position } from "./Position";
import { Cardinals, Orientation } from "./Orientation";
import { Planet } from './environment/Planet'

type Xcoordinates = "right" | "left";
type Ycoordinates = -1 | 1;

class Rover {
	private readonly _map: Planet;
	private readonly orientation: Orientation;
	public readonly position: Position;

	constructor(orientation: Orientation, position: Position, planet: Planet) {
		this.orientation = orientation;
		this.position = position;
		this._map = planet;
	}

	turn(direction: Xcoordinates) {
		const newOrientation = this.orientation.turn(direction)
		const rover = new Rover(newOrientation, this.position, this._map);
		return rover
	}

	canMove(direction: Ycoordinates): boolean {
		const newPosition = this.calculateNewPosition(direction);
		const hasObstacle = this._map.checkObstacleAtPosition(newPosition)

		if (hasObstacle) {
			return false
		}
		return true;
	}

	move(direction: Ycoordinates): Rover {
		if (this.canMove(direction)) {
			const newPosition = this.calculateNewPosition(direction);
			const rover = new Rover(this.orientation, newPosition, this._map);
			return rover
		}
		return this;
	}

	private calculateNewPosition(direction: Ycoordinates): Position {
		const movementMap: Record<Cardinals, Position> = {
			[Cardinals.Nord]: { x: this.position.x, y: this.position.y + direction },
			[Cardinals.Sud]: { x: this.position.x, y: this.position.y - direction },
			[Cardinals.Est]: { x: this.position.x + direction, y: this.position.y },
			[Cardinals.Ouest]: { x: this.position.x - direction, y: this.position.y },
		};
		const newPosition: Position = movementMap[this.orientation.getOrientation()];
		return {
			x: (newPosition.x + this._map.width) % this._map.width,
			y: (newPosition.y + this._map.height) % this._map.height,
		};
	}
}
export default Rover;
