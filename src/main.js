import { io, Socket } from "socket.io-client"
import Rover from "./topologie/Rover"

const socket = io('http://localhost:3000/')
const btn = document.querySelector('#btn')
const roverPosition = document.querySelector('#roverPosition')
const roverOrientation = document.querySelector('#roverOrientation')
const roverAvance = document.querySelector('#roverAvance')
const roverRecule = document.querySelector('#roverRecule')
const roverGauche = document.querySelector('#roverGauche')
const roverDroite = document.querySelector('#roverDroite')


roverAvance.addEventListener('click', () => {
    command('Rover', 'avance')
})

roverRecule.addEventListener('click', () => {
    command('Rover', 'recule')
})
roverGauche.addEventListener('click', () => {
    command('Rover', 'gauche')
})
roverDroite.addEventListener('click', () => {
    command('Rover', 'droite')
})
const command = (target, action) => {
    const data = { target: target, action: action }
    socket.emit('command', data)
}
socket.on('connection', (rover) => {
    console.log(rover)
    updateMap(rover._map, rover.position)
})


const map = document.querySelector('.map')
let mapArray = []
const updateMap = (roverMap, roverPosition) => {
    console.log(roverPosition)
    map.innerHTML = ''
    for (let i = 0; i < roverMap.height; i++) {
        mapArray.push([])
        const row = document.createElement('div')
        map.appendChild(row)
        row.classList.add('row')
        for (let j = 0; j < roverMap.width; j++) {
            mapArray[i].push(0)
            const tile = document.createElement('div')
            row.appendChild(tile)
            tile.classList.add('tile')
            tile.classList.add('empty')
        }
    }
    const rover = map.childNodes[roverPosition.y].childNodes[roverPosition.x]
    rover.classList = 'tile rover'

    for (const obstacle of roverMap._obstacles) {
        const obstaclePosition = obstacle.position
        const obstacleNode = map.childNodes[obstaclePosition.y].childNodes[obstaclePosition.x]
        obstacleNode.classList = 'tile obstacle'
    }
}

socket.on('test', (rover) => {
    console.log(rover)
    roverPosition ?
        roverPosition.innerHTML = JSON.stringify(rover.position) : null
    roverOrientation ?
        roverOrientation.innerHTML = JSON.stringify(rover.orientation) : null

    updateMap(rover._map, rover.position)
})
