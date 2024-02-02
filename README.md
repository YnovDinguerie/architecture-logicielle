# architecture-logicielle

This project is a NodeJS project with Typescript.

## Definition

We sent a Rover towards the planet Mars.
This project is allows us to define and communicate with the remote Rover from earth.

## Topology

We defined some elements to make the the project more comprehensive.
We can list :
- Rover : The rover and the action it can make
- Position : The position of the Rover on the X and Y axis
- Orientation : The cardianl orientation of the Rover (means `North`, `East`, `South` or `West`)
- Direction : The direction the Rover can take (means `Forward` or `Backward`)
- Obstacle : define an obstacle we could find on the planet the Rover has landed on.

## Test

The classes defined above are tested into the `test` folder at the root of this project. Tests are often refactored to fit the need of the growing application.

## Design

We intend to make this project simple and readable. We focused the development following the SOLID principles and defined what classes were `Entity` or `Key - Value`

We populated the project using types

## Architectures

We made an architectural schema to show the different modules and to what modules we need to separate.

![Architectural_schema](./assets/architectural-schema.png)

## Communication

## Members

- Leo Philip
- Loïc Bozon
- Yohann Tonerre
- Mickael Brunet



## installation
`yarn`

## Start project
# serve
`yarn dev`

# websocket
`ts-node ./src/communication/webSocket/WebSocketClass.ts`

# test
`npx jest`

## Information
Dans le fichier `config.ts` il est possible de changer la distance entre le rover et le controlleur. Cela permet d'utiliser le répéteur si les deux sont trop éloignés


le schema est dans le dossier public
