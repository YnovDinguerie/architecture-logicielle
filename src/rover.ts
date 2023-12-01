
export enum Orientation {
    Nord = 0,
    Est = 90,
    Sud = 180,
    Ouest = -90
}

export enum Direction {
    Forward = 1,
    Backward = -1
}

export interface Position {
    x: number;
    y: number;
}

interface IRover {
    orientation: Orientation;
    position: Position;
}

interface IMap {
    width: number;
    height: number;
}

const defaultMap: IMap = {
    width: 5,
    height: 4
}

class Rover implements IRover {

    private readonly map: IMap;
    static Nord: Rover;

    constructor(public orientation: Orientation, public position: Position) {
        this.orientation = orientation
        this.position = position
        this.map = defaultMap;
    }

    turn(orientation: Orientation): Rover {
        this.orientation = orientation;
        return this
    }

    move(direction: Direction): Rover {
        const movementMap: Record<Orientation, Position> = {
            [Orientation.Nord]: { x: this.position.x, y: this.position.y + direction },
            [Orientation.Sud]: { x: this.position.x, y: this.position.y - direction },
            [Orientation.Est]: { x: this.position.x + direction, y: this.position.y },
            [Orientation.Ouest]: { x: this.position.x - direction, y: this.position.y },
        };

        // Obtenez la nouvelle position en fonction de l'orientation
        const newPosition = movementMap[this.orientation];

        // Ajustez la position si elle dépasse les limites de la carte
        this.position.x = (newPosition.x + this.map.width) % this.map.width;
        this.position.y = (newPosition.y + this.map.height) % this.map.height;

        return this
    }
}




export default Rover
