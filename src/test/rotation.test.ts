import { DirectionEnum } from "../topologie/Direction";
import { Cardinals, Orientation } from "../topologie/Orientation";
import { RoverBuilder } from "./utilities/RoverBuilder";

describe("Un Rover peut tourner", () => {
	test.each([
		[new Orientation(Cardinals.Nord), new Orientation(Cardinals.Est)],
		[new Orientation(Cardinals.Est), new Orientation(Cardinals.Sud)],
		[new Orientation(Cardinals.Sud), new Orientation(Cardinals.Ouest)],
		[new Orientation(Cardinals.Ouest), new Orientation(Cardinals.Nord)],
	])(
		"ETANT DONNE un rover orienté {orientationTestée}" +
			"QUAND il tourne a droite et avance" +
			"ALORS son comportement est le même qu'un Rover orienté {orientationSuivanteHoraire} faisant de même",
		(
			orientationTestée: Orientation,
			orientationSuivanteHoraire: Orientation
		) => {
			let roverTesté = new RoverBuilder().Orienté(orientationTestée).Build();
			let roverTémoin = new RoverBuilder()
				.Orienté(orientationSuivanteHoraire)
				.Build();
			roverTesté.turn("right");
			roverTesté.move(1);
			roverTémoin = roverTémoin.move(1);

			expect(roverTesté.position).toEqual(roverTémoin.position);
		}
	);
});
