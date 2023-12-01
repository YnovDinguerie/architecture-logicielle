import { Direction, Orientation } from "../Rover";
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
    'ALORS son y augmente de 1 ' +
    'ET son x reste la même',
    (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Nord)
            .Build()

        rover.move(Direction.Forward);

        expect(rover.position.x).toBe(x);
        expect(rover.position.y).toBe(y + 1);
    });


test.each(interestingCases)(
    'ETANT DONNE un Rover orienté Sud atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS son y diminue de 1 ' +
    'ET son x reste la même', (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Sud)
            .Build()

        rover.move(Direction.Forward);

        expect(rover.position.x).toBe(x);
        expect(rover.position.y).toBe(y - 1);
    });

test.each(interestingCases)(
    'ETANT DONNE un Rover orienté Est atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS son x augmente de 1 ' +
    'ET son y reste la même', (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Est)
            .Build()

        rover.move(Direction.Forward);

        expect(rover.position.x).toBe(x + 1);
        expect(rover.position.y).toBe(y);
    });

test.each(interestingCases)(
    'ETANT DONNE un Rover orienté Ouest atterrissant en (x, y) ' +
    'QUAND on le fait avancer ' +
    'ALORS son x diminue de 1 ' +
    'ET son y reste la même', (x, y) => {
        let rover = new RoverBuilder()
            .AyantPourPosition(x, y)
            .Orienté(Orientation.Ouest)
            .Build()

        rover.move(Direction.Forward);

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
