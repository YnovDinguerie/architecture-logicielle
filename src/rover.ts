// Définition de l'orientation du rover
enum Orientation {
    Nord = 0,
    Est = 90,
    Sud = 180,
    Ouest = -90
}

enum Direction {
    Forward = 1,
    Backward = -1
}

interface Position {
    x: number;
    y: number;
}

interface IRover {
    orientation: Orientation;
    position: Position;
}


class Rover implements IRover {
    constructor(public orientation: Orientation, public position: Position) {

    }

    turn(orientation: Orientation): void {
        this.orientation = orientation
    }


    move(direction: Direction): void {
        const movementMap: Record<Orientation, Position> = {
            [Orientation.Nord]: { x: this.position.x, y: this.position.y + direction },
            [Orientation.Sud]: { x: this.position.x, y: this.position.y - direction },
            [Orientation.Est]: { x: this.position.x + direction, y: this.position.y },
            [Orientation.Ouest]: { x: this.position.x - direction, y: this.position.y },
        };

        this.position = movementMap[this.orientation];
    }

}


export default Rover
