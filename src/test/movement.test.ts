import { DirectionEnum } from "../topologie/Direction";
import { Cardinals, Orientation } from "../topologie/Orientation";
import { multiplyAndFlatten } from "./utilities/CartesianData";
import { RoverBuilder } from "./utilities/RoverBuilder";

const interestingCases = [
	[0, 0],
	[1, 0],
	[0, 1],
	[1, 1],
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

			expect(rover._position.x).toBe(x);
			expect(rover._position.y).toBe(y + 1);
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

			expect(rover._position.x).toBe(x);
			expect(rover._position.y).toBe(y - 1);
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

			expect(rover._position.x).toBe(x + 1);
			expect(rover._position.y).toBe(y);
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

			expect(rover._position.x).toBe(x - 1);
			expect(rover._position.y).toBe(y);
		}
	);

	const orientations = [
		new Orientation(Cardinals.Nord),
		new Orientation(Cardinals.Sud),
		new Orientation(Cardinals.Est),
		new Orientation(Cardinals.Ouest),
	];

	test.each(multiplyAndFlatten(orientations, interestingCases))(
		"ETANT DONNE un Rover orienté {orientation} atterrissant en (x, y) " +
			"QUAND on le fait reculer " +
			"ALORS le résultat est le même qu'en avançant dans la direction opposée ",
		(orientation: Orientation, x, y) => {
			let roverTesté = new RoverBuilder()
				.AyantPourPosition(x, y)
				.Orienté(orientation)
				.Build();

			let roverTémoin = new RoverBuilder()
				.AyantPourPosition(x, y)
				.Orienté(roverTesté.orientation)
				.Build();

			roverTesté.move(-1);
			roverTémoin.move(1);

			expect(roverTesté.position).toEqual(roverTémoin.position);
		}
	);
});
