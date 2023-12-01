export enum DirectionEnum {
    Forward = 1,
    Backward = -1
}

export class Direction {
    private _direction

    constructor(direction: DirectionEnum) {
        this._direction = direction
    }


}
