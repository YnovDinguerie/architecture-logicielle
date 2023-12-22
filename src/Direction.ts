// Objet valeur
export enum DirectionEnum {
    Forward = 1,
    Backward = -1
}

// Objet valeur
export class Direction {
    private _direction

    constructor(direction: DirectionEnum) {
        this._direction = direction
    }
}
