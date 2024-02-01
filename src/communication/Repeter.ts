import Rover from "../topologie/Rover";
import { InterpreterMessage } from "../types/interpreterTypes";
import { Interpreter } from "./Interpreter";
import { Server as SocketIOServer } from 'socket.io';

export class Repeter {
    private rover: Rover
    private command: InterpreterMessage
    constructor(rover: Rover, command: InterpreterMessage) {
        this.rover = rover
        this.command = command
    }

    /**
     * Repeat the command to the rover is the distance to reach him is too large
     */
    public repeat() {
        const interpreter = new Interpreter(this.rover);
        interpreter.interpret(this.command);
        return interpreter._rover
    }
}
