import { Position } from "../../topologie/Position";
import { Orientation, Cardinals } from "../../topologie/Orientation";
import Rover from "../../topologie/Rover";
import { Planet } from "../../topologie/environment/Planet";

export class RoverBuilder {
	private orientation: Orientation = new Orientation(Cardinals.Nord);
	private position: Position = { x: 0, y: 0 };
	private planet: Planet = new Planet(4, 4);
	public Orienté(orientation: Orientation): RoverBuilder {
		this.orientation = orientation;
		return this;
	}

	public AyantPourPosition(x: number, y: number): RoverBuilder {
		this.position = { x: x, y: y };
		return this;
	}

	public Build(): Rover {
		return new Rover(this.orientation, this.position, this.planet);
	}
}
