import Rover from "../topologie/Rover";
import { InterpreterMessage } from "../types/interpreterTypes";
import { Interpreter } from "./Interpreter";
import { WebSocketClass } from "./webSocket/WebSocketClass";
import { Server as SocketIOServer, Socket } from 'socket.io';

export class Repeter {
    private rover: Rover
    private command: InterpreterMessage
    private io: SocketIOServer
    constructor(rover: Rover, command: InterpreterMessage, io: SocketIOServer) {
        this.rover = rover
        this.command = command
        this.io = io
    }

    /**
     * Repeat the command to the rover is the distance to reach him is too large
     */
    public repeat() {
        const interpreter = new Interpreter(this.rover, this.io);
        interpreter.interpret(this.command);
        return interpreter
    }
}
