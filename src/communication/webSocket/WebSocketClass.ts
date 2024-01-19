import express, { Express, Request, Response } from 'express';
import http, { Server as HTTPServer } from 'http';
import { Server as SocketIOServer, Socket } from 'socket.io';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import path from 'node:path';
import { Orientation } from '../../topologie/Orientation';
import { Position } from '../../topologie/Position';
import { Planet } from '../../topologie/environment/Planet';
import Rover from '../../topologie/Rover';
import { Interpreter } from '../Interpreter';
import { Obstacle } from '../../topologie/Obstacle';
import { Repeter } from '../Repeter';
import { InterpreterMessage } from '../../types/interpreterTypes';


const obstacle1 = new Obstacle({ x: 1, y: 1 })
const orientation = new Orientation(0)
const position = new Position(0, 0)
const planet = new Planet(5, 3)
planet.addObstacle(obstacle1)


const distanceBetweenRoverAndController = 3
let rover = new Rover(orientation, position, planet);
const serverPort = 3000




export class WebSocketClass {
    private app: Express;
    private server: HTTPServer;
    private io: SocketIOServer;
    private rover: Rover


    constructor() {
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
            console.log('a user connected');
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
            console.log('on est direct depuis la station ')
            const interpreter = new Interpreter(this.rover, this.io);
            interpreter.interpret(command);
        }
        else {
            console.log('on est sur le repeteur ')
            const repeter = new Repeter(this.rover, command, this.io)
            repeter.repeat();
        }
    }
}

const marsRoverApp = new WebSocketClass();
marsRoverApp.start();
