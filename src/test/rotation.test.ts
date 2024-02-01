import { Cardinals, Orientation } from "../topologie/Orientation";
import { Position } from "../topologie/Position";
import { RoverBuilder } from "./utilities/RoverBuilder";

describe("Un Rover peut tourner", () => {
	test.each([
		[Cardinals.Nord, Cardinals.Est],
		[Cardinals.Est, Cardinals.Sud],
		[Cardinals.Sud, Cardinals.Ouest],
		[Cardinals.Ouest, Cardinals.Nord],
	])(
		"ETANT DONNE un rover orienté %s " +
		"QUAND il tourne a droite et avance" +
		"ALORS son comportement est le même qu'un Rover orienté %s faisant de même",
		(orientationTestée: Cardinals, orientationSuivanteHoraire: Cardinals) => {
			const roverBuilder = new RoverBuilder();
			let roverTesté = roverBuilder
				.Orienté(new Orientation(orientationTestée))
				.Build();
			let roverTémoin = roverBuilder
				.Orienté(new Orientation(orientationSuivanteHoraire))
				.Build();
			roverTesté = roverTesté.turn("right").move(1);
			roverTémoin = roverTémoin.move(-1);

			expect(roverTesté.position).toEqual(roverTémoin.position);
		}
	);

});
