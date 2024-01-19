import Rover from "../topologie/Rover"
import { Server as SocketIOServer, Socket } from 'socket.io';
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
        console.log(cmd.action)
        switch (cmd.action) {
            case 'avance':
                this._rover.move(1)
                break
            case 'recule':
                this._rover.move(-1)
                break
            case 'gauche':
                this._rover.turn('left')
                break
            case 'droite':
                this._rover.turn('right')
                break
        }
        this._io.emit('test', this._rover)
    }

}
