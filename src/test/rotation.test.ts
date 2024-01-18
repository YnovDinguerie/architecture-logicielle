import { Cardinals } from "../topologie/Orientation";
import { RoverBuilder } from "./utilities/RoverBuilder";

describe('Un Rover peut tourner', () => {
    test.each([
        [Cardinals.Nord, Cardinals.Est],
        [Cardinals.Est, Cardinals.Sud],
        [Cardinals.Sud, Cardinals.Ouest],
        [Cardinals.Ouest, Cardinals.Nord],
    ])("ETANT DONNE un rover orienté {orientationTestée}" +
        "QUAND il tourne a droite et avance" +
        "ALORS son comportement est le même qu'un Rover orienté {orientationSuivanteHoraire} faisant de même",
        (orientationTestée: Cardinals, orientationSuivanteHoraire: Cardinals) => {

            let roverTesté = new RoverBuilder()
                .Orienté(orientationTestée)
                .Build();

            let roverTémoin = new RoverBuilder()
                .Orienté(orientationSuivanteHoraire)
                .Build();

            roverTesté = roverTesté.turn(Cardinals.Est).move(1);
            roverTémoin = roverTémoin.move(1);

            expect(roverTesté.position).toEqual(roverTémoin.position);
        })
})
