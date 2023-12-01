import { Orientation } from "../Rover";
// import { multiplyAndFlatten } from "./utilities/CartesianData";
import { RoverBuilder } from "./utilities/RoverBuilder";

const interestingCases = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
];

test.each(interestingCases)(
    'ETANT DONNE un Rover orienté Nord atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS sa x augmente de 1 ' +
    'ET sa y reste la même',
    (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Nord)
            .Build()

        rover.move(1);

        expect(rover.position.x).toBe(x);
        expect(rover.position.y).toBe(y + 1);
    });


test.each(interestingCases)('ETANT DONNE un Rover orienté Sud atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS sa x diminue de 1 ' +
    'ET sa y reste la même', (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Sud)
            .Build()

        rover.move(1);

        expect(rover.position.x).toBe(x);
        expect(rover.position.y).toBe(y - 1);
    });

test.each(interestingCases)('ETANT DONNE un Rover orienté Est atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS sa y augmente de 1 ' +
    'ET sa y reste la même', (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Est)
            .Build()

        rover.move(1);

        expect(rover.position.x).toBe(x);
        expect(rover.position.y).toBe(y + 1);
    });

test.each(interestingCases)('ETANT DONNE un Rover orienté Ouest atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS sa x diminue de 1 ' +
    'ET sa y reste la même', (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Ouest)
            .Build()

        rover.move(1);

        expect(rover.position.x).toBe(x - 1);
        expect(rover.position.y).toBe(y);
    });

// const orientations = [Orientation.Nord, Orientation.Sud, Orientation.Est, Orientation.Ouest];

// test.each(multiplyAndFlatten(orientations, interestingCases))('ETANT DONNE un Rover orienté {orientation} atterrissant en (x, y) ' +
//     'QUAND on le fait reculer ' +
//     'ALORS le résultat est le même qu\'en avançant dans la direction opposée ', (orientation: Orientation, x, y) => {
//         let roverTesté = new RoverBuilder()
//             .AyantPourPosition(x, y)
//             .Orienté(orientation)
//             .Build();

//         let roverTémoin = new RoverBuilder()
//             .AyantPourPosition(x, y)
//             .Orienté(roverTesté.orientation)
//             .Build();

//         roverTesté.move(-1);
//         roverTémoin.move(1);

//         expect(roverTesté.position).toEqual(roverTémoin.position);
// });
