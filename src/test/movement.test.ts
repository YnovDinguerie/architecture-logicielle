import { DirectionEnum } from "../topologie/Direction";
import { Cardinals, Orientation } from "../topologie/Orientation";
import { RoverBuilder } from "./utilities/RoverBuilder";

const interestingCases = [
	[1, 1],
	[2, 1],
	[1, 2],
	[2, 2],
];
describe("Tests mouvement", () => {
	test.each(interestingCases)(
		"ETANT DONNE un Rover orienté Nord atterrissant en (x, y) " +
			"QUAND on le fait avancer " +
			"ALORS son y augmente de 1 " +
			"ET son x reste la même",
		(x, y) => {
			let rover = new RoverBuilder()
				.AyantPourPosition(x, y)
				.Orienté(new Orientation(Cardinals.Nord))
				.Build();

			rover.move(DirectionEnum.Forward);

			expect(rover.position.x).toBe(x);
			expect(rover.position.y).toBe(y + 1);
		}
	);

	test.each(interestingCases)(
		"ETANT DONNE un Rover orienté Sud atterrissant en (x, y) " +
			"QUAND on le fait avancer " +
			"ALORS son y diminue de 1 " +
			"ET son x reste la même",
		(x, y) => {
			let rover = new RoverBuilder()
				.AyantPourPosition(x, y)
				.Orienté(new Orientation(Cardinals.Sud))
				.Build();

			rover.move(DirectionEnum.Forward);

			expect(rover.position.x).toBe(x);
			expect(rover.position.y).toBe(y - 1);
		}
	);

	test.each(interestingCases)(
		"ETANT DONNE un Rover orienté Est atterrissant en (x, y) " +
			"QUAND on le fait avancer " +
			"ALORS son x augmente de 1 " +
			"ET son y reste la même",
		(x, y) => {
			let rover = new RoverBuilder()
				.AyantPourPosition(x, y)
				.Orienté(new Orientation(Cardinals.Est))
				.Build();

			rover.move(DirectionEnum.Forward);

			expect(rover.position.x).toBe(x + 1);
			expect(rover.position.y).toBe(y);
		}
	);

	test.each(interestingCases)(
		"ETANT DONNE un Rover orienté Ouest atterrissant en (x, y) " +
			"QUAND on le fait avancer " +
			"ALORS son x diminue de 1 " +
			"ET son y reste la même",
		(x, y) => {
			let rover = new RoverBuilder()
				.AyantPourPosition(x, y)
				.Orienté(new Orientation(Cardinals.Ouest))
				.Build();

			rover.move(DirectionEnum.Forward);

			expect(rover.position.x).toBe(x - 1);
			expect(rover.position.y).toBe(y);
		}
	);
});
