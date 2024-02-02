import { io } from "socket.io-client"

const socket = io('http://localhost:3000/')
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
    updateMap(rover._map, rover.position, rover.orientation.orientation)
})

const map = document.querySelector('.map')
let mapArray = []
const updateMap = (roverMap, roverPosition, roverOrientation) => {
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

    rover.classList = `tile rover ${getOrientation(roverOrientation)}`

    for (const obstacle of roverMap._foundedObstacles) {
        const obstacleNode = map.childNodes[obstacle.y].childNodes[obstacle.x]
        obstacleNode.classList = 'tile obstacle'
    }
}

const getOrientation = (orientation) => {
    switch (orientation) {
        case 0:
            return 'bot'
        case 90:
            return 'right'
        case 180:
            return 'top'
        case 270:
            return 'left'
    }
}

socket.on('rover-action', (rover) => {
    updateMap(rover._map, rover.position, rover.orientation.orientation)
})
