import Rover from "../topologie/Rover";
import { Cardinals, Orientation } from "../topologie/Orientation";
import { Position } from "../topologie/Position";
import { Planet } from "../topologie/environment/Planet";
import { RoverBuilder } from "./utilities/RoverBuilder";
import { Obstacle } from "../topologie/environment/Obstacle";

describe("Rover", () => {
    let roverBuilder: RoverBuilder;

    beforeEach(() => {
        roverBuilder = new RoverBuilder();
    });

    test("should land on the planet", () => {
        const rover = roverBuilder.Build();
        expect(rover.position.x).toStrictEqual(0);
        expect(rover.position.y).toStrictEqual(0);
    });

});
