import { Position } from "./Position";
import { Cardinals, Orientation } from "./Orientation";
import { Direction } from "./Direction";
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
    move(direction: 1 | -1): Rover {
        const movementMap: Record<Cardinals, Position> = {
            [Cardinals.Nord]: { x: this.position.x, y: this.position.y + direction },
            [Cardinals.Sud]: { x: this.position.x, y: this.position.y - direction },
            [Cardinals.Est]: { x: this.position.x + direction, y: this.position.y },
            [Cardinals.Ouest]: { x: this.position.x - direction, y: this.position.y },
        };
        const newPosition: Position = movementMap[this._orientation.getOrientation()];
        console.log(newPosition)

        this.position.x = (newPosition.x + this._map.width) % this._map.width;
        this.position.y = (newPosition.y + this._map.height) % this._map.height;

        return this
    }
}

export default Rover



// import { Position } from "./Position";

// export class Orientation {
//     static Nord: Orientation = new Orientation(new Position(0, 1));
//     static Sud: Orientation = new Orientation(new Position(0, -1));
//     static Est: Orientation = new Orientation(new Position(1, 0));
//     static Ouest: Orientation = new Orientation(new Position(-1, 0));

//     private _vecteur: Position;

//     private constructor(vecteur: Position) {
//         this._vecteur = vecteur;
//     }

//     public Est(): Orientation {
//         if (this == Orientation.Nord) return Orientation.Est;
//         if (this == Orientation.Est) return Orientation.Sud;
//         if (this == Orientation.Sud) return Orientation.Ouest;
//         return Orientation.Nord;
//     }

//     public Appliquer(position: Position): Position {
//         return this._vecteur.add(position);
//     }

//     public Oppose() {
//         return this.Est().Est();
//     }

//     public Ouest() {
//         return this.Oppose().Est();
//     }

//     public toString() {
//         if (this == Orientation.Nord) return "Nord";
//         if (this == Orientation.Est) return "Est";
//         if (this == Orientation.Sud) return "Sud";
//         return "Ouest";
//     }
// }
