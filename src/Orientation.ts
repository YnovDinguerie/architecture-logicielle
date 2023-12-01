export enum Cardinals {
    Nord = 0,
    Est = 90,
    Sud = 180,
    Ouest = 270
}

export class Orientation {
    private _orientation: Cardinals;

    constructor(initialOrientation: Cardinals) {
        this._orientation = initialOrientation;
    }
    getOrientation(): Cardinals {
        return this._orientation;
    }

    turn(direction: 'right' | 'left'): void {
        const rotationAngle = direction === 'right' ? 90 : -90;

        this._orientation = (this._orientation + rotationAngle) % 360;
    }
}
