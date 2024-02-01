import express, { Express, Request, Response } from 'express';
import http, { Server as HTTPServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import path from 'node:path';
import { Orientation } from '../../topologie/Orientation';
import { Position } from '../../topologie/Position';
import { Planet } from '../../topologie/environment/Planet';
import Rover from '../../topologie/Rover';
import { Interpreter } from '../Interpreter';
import { Obstacle } from '../../topologie/environment/Obstacle';
import { Repeter } from '../Repeter';
import { InterpreterMessage } from '../../types/interpreterTypes';


const obstacle1 = new Obstacle({ x: 1, y: 1 })
const orientation = new Orientation(0)
const position = new Position(10, 5)
const planet = new Planet(20, 15)
planet.addObstacle(obstacle1)


const distanceBetweenRoverAndController = 30
const rover = new Rover(orientation, position, planet);
const serverPort = 3000

export class WebSocketClass {
    private app: Express;
    private server: HTTPServer;
    private io: SocketIOServer;
    private rover: Rover

    constructor(rover: Rover) {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = new SocketIOServer(this.server);
        this.rover = rover
        this.setupRoutes();
        this.setupSocket();
    }

    private setupRoutes() {
        this.app.get('/', (_req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, 'index.html'));
        });
    }

    private setupSocket() {
        this.io.on('connection', (socket: Socket) => {
            this.io.emit('connection', this.rover)
            socket.on('command', (command: InterpreterMessage) => {
                this.sendCommand(command)
            });
        });
    }

    public start() {
        this.server.listen(serverPort, () => {
            console.log(`listening on port ${serverPort}`);
        });
    }

    /**
     * Send a command to the Rover via a direct way or via the Repeater
     */
    public sendCommand(command: InterpreterMessage) {
        if (distanceBetweenRoverAndController < 4) {
            const interpreter = new Interpreter(this.rover);
            this.rover = interpreter.interpret(command);
            this.io.emit('rover-action', this.rover)
        }
        else {
            const repeter = new Repeter(this.rover, command)
            this.rover = repeter.repeat();
            this.io.emit('rover-action', this.rover)
        }
    }
}

const marsRoverApp = new WebSocketClass(rover);
marsRoverApp.start();
