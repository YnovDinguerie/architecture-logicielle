import { Position } from "./Position";
import { Cardinals, Orientation } from "./Orientation";
import { Planet } from './environment/Planet'
import { RoverError } from "../RoverError";

type Xcoordinates = "right" | "left";
type Ycoordinates = -1 | 1;

class Rover {
	private readonly _map: Planet;
	public readonly orientation: Orientation;
	public readonly position: Position;
	static Nord: Rover;

	constructor(orientation: Orientation, position: Position, planet: Planet) {
		this.orientation = orientation;
		this.position = position;
		this._map = planet;
	}

	land() {
		const hasObstacle = this._map.hasObstacle();
		const obstacles = this._map.obstacles()
	}

	turn(direction: Xcoordinates) {
		this.orientation.turn(direction)
	}

	canMove(direction: Ycoordinates): boolean {
		const newPosition = this.calculateNewPosition(direction);
		const hasObstacle = this._map.hasObstacleAt(newPosition.x, newPosition.y);

		if (hasObstacle) {
			console.log("Il y a un obstacle à la prochaine position. Le rover ne peut pas se déplacer en:" + JSON.stringify(newPosition));
			new RoverError(`Il y a un obstacle à la prochaine position.Le rover ne peut pas se déplacer en: ${JSON.stringify(newPosition)}`, 404)
			return false
		}
		return true;
	}

	move(direction: Ycoordinates): Rover {
		if (this.canMove(direction)) {
			const newPosition = this.calculateNewPosition(direction);
			this.position.x = newPosition.x;
			this.position.y = newPosition.y;
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

	stop(): void {
		console.log("Rover stopped.");
	}
}

export default Rover;
