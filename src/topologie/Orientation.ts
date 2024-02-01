export enum Cardinals {
    Nord = 0,
    Est = 90,
    Sud = 180,
    Ouest = 270,
}

const rotationMap = {
    'right': -90,
    'left': 90
};

export class Orientation {
    readonly orientation: Cardinals;

    constructor(initialOrientation: Cardinals) {
        this.orientation = initialOrientation;
    }

    /**
     * Get the orientation of a Rover
     * @return Cardinals
     */
    getOrientation(): Cardinals {
        return this.orientation;
    }

    /**
     * Change the orientation
     * @param direction {right | left}
     * @return Orientation
     */
    turn(direction: 'right' | 'left'): Orientation {
        const rotationAngle = rotationMap[direction];
        const orientation = new Orientation((360 + (this.orientation + rotationAngle)) % 360)
        return orientation
    }
}
