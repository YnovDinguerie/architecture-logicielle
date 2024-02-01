import { Cardinals, Orientation } from "../topologie/Orientation";
import { Planet } from "../topologie/environment/Planet";
import { RoverBuilder } from "./utilities/RoverBuilder";

const interestingCases = [
	[0, 0],
	[1, 0],
	[0, 1],
	[1, 1],
];
describe("Tests mouvement", () => {
	let planet: Planet;
	let roverBuilder: RoverBuilder;

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

			rover = rover.move(1);

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

			rover = rover.move(1);

			if (y) {
				expect(rover.position.x).toBe(x);
				expect(rover.position.y).toBe(outOfMap(y - 1));
			}
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

			rover = rover.move(1);

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

			rover = rover.move(1);

			expect(rover.position.x).toBe(outOfMap(x - 1));
			expect(rover.position.y).toBe(y);
		}
	);
});

function outOfMap(position: number) {
	const planetWidth = 4;
	return ((position % planetWidth) + planetWidth) % planetWidth;
}
