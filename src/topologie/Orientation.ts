// Objet valeur
export enum Cardinals {
    Nord = 0,
    Est = 90,
    Sud = 180,
    Ouest = 270
}

// Objet valeur
export class Orientation {
    private readonly _orientation: Cardinals;

    constructor(initialOrientation: Cardinals) {
        this._orientation = initialOrientation;
    }

    /**
     * Get the orientation of a Rover
     * @return Carndinals
     */
    getOrientation(): Cardinals {
        return this._orientation;
    }

    /**
     * Change the orientation
     * @param direction {right | left}
     * @return Orientation
     */
    turn(direction: 'right' | 'left'): Orientation {
        const rotationAngle = direction === 'right' ? 90 : -90;
        // return new orientation
        return new Orientation((this._orientation + rotationAngle) % 360)
    }
}
