import { Position } from "./Position";
import { Cardinals, Orientation } from "./Orientation";
import { Planet } from './environment/Planet'
// Objet valeur (toutes ses propriétés sont sont identité)
// SOLID : 
// S => OK

type Xcoordinates = 'right' | 'left'
type Ycoordinates = -1 | 1

class Rover {
    private readonly _map: Planet;
    private readonly _orientation: Orientation;
    public readonly _position: Position;
    static Nord: Rover;

    /**
     * Constructor - Create a new Rover
     * @param orientation {Orientation} - the initial orientation of the Rover
     * @param position {Position} - The initial position of the Rover
     * @param planet {Planet} - The Planet the has landed on
     */
    constructor(orientation: Orientation, position: Position, planet: Planet) {
        this._orientation = orientation;
        this._position = position;
        this._map = planet;
    }


    land() {
        const hasObstacle = this._map.hasObstacle();
        const obstacles = this._map.obstacles()
        hasObstacle ? console.log("do not land foo fast, there's obstacles at coordinates:" + JSON.stringify(obstacles)) : console.log('Aucun obstacle sur la planete')
    }

    turn(direction: Xcoordinates) {
        this._orientation.turn(direction)
    }

    /**
     * Whether the Rover can move or not
     * @param direction - The direction the Rover should move
     * @return boolean
     */
    canMove(direction: Ycoordinates): boolean {
        const newPosition = this.calculateNewPosition(direction);
        const hasObstacle = this._map.hasObstacleAt(newPosition.x, newPosition.y);

        if (hasObstacle) {
            console.log("Il y a un obstacle à la prochaine position. Le rover ne peut pas se déplacer en:" + JSON.stringify(newPosition));
            return false;
        }

        return true;
    }

    /**
     * Move the Rover on the given direction
     * @param direction - The direction the Rover should move
     * @return Rover
     */
    move(direction: Ycoordinates): Rover {
        if (this.canMove(direction)) {
            const newPosition = this.calculateNewPosition(direction);
            console.log(newPosition);

            this._position.x = newPosition.x;
            this._position.y = newPosition.y;
        }

        return this;
    }

    /**
     * Calculate the new position of the Rover
     * @param direction - The direction the Rover should move
     * @return Position
     */
    private calculateNewPosition(direction: Ycoordinates): Position {
        const movementMap: Record<Cardinals, Position> = {
            [Cardinals.Nord]: { x: this._position.x, y: this._position.y + direction },
            [Cardinals.Sud]: { x: this._position.x, y: this._position.y - direction },
            [Cardinals.Est]: { x: this._position.x + direction, y: this._position.y },
            [Cardinals.Ouest]: { x: this._position.x - direction, y: this._position.y },
        };

        const newPosition: Position = movementMap[this._orientation.getOrientation()];
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



