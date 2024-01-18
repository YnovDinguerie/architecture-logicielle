import { Position } from "../../topologie/Position";
import Rover, { Orientation } from "../../Rover";

export class RoverBuilder {

    private orientation: Orientation = Orientation.Nord
    private position: Position = { x: 0, y: 0 }

    public Orienté(orientation: Orientation): RoverBuilder {
        this.orientation = orientation;
        return this;
    }

    public AyantPourPosition(x: number, y: number): RoverBuilder {
        this.position = { x: x, y: y };
        return this;
    }

    public Build(): Rover {
        return new Rover(this.orientation, this.position);
    }
}
