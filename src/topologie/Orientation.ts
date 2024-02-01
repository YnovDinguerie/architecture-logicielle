// Objet valeur
export enum Cardinals {
    Nord = 0,
    Est = 90,
    Sud = 180,
    Ouest = 270
}

const rotationMap = {
    'right': 90,
    'left': -90
};

// Objet valeur
export class Orientation {
    orientation: Cardinals;

    constructor(initialOrientation: Cardinals) {
        this.orientation = initialOrientation;
    }

    /**
     * Get the orientation of a Rover
     * @return Carndinals
     */
    getOrientation(): Cardinals {
        return this.orientation;
    }

    /**
     * Change the orientation
     * @param direction {right | left}
     * @return Orientation
     */
    turn(direction: 'right' | 'left'): void {
        const rotationAngle = rotationMap[direction];
        this.orientation = (360 + (this.orientation + rotationAngle)) % 360;
    }
}
