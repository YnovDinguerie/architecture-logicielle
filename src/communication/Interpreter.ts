import Rover from "../topologie/Rover"
import { Server as SocketIOServer } from 'socket.io';
import { InterpreterMessage } from "../types/interpreterTypes";

export class Interpreter {
    _rover: Rover
    _io: SocketIOServer
    constructor(rover: Rover, io: SocketIOServer) {
        this._rover = rover
        this._io = io
    }

    /**
     * Interprete the message received from the mission control and translate it to the rover
     */
    public interpret(cmd: InterpreterMessage) {
        switch (cmd.action) {
            case 'avance':
                this._rover = this._rover.move(1)
                break
            case 'recule':
                this._rover = this._rover.move(-1)
                break
            case 'gauche':
                this._rover = this._rover.turn('left')
                break
            case 'droite':
                this._rover = this._rover.turn('right')
                break
        }
        return this._rover
    }

}
