// export enum DirectionEnum {
//     Forward = 1,
//     Backward = -1
// }

import { Position } from "./Position";

// Entité
export class Obstacle {
    public readonly position: Position;
    constructor(position: Position) {
        this.position = position;
    }


}

