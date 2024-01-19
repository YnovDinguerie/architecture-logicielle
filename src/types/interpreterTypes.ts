export type InterpreterMessage = {
    target: 'Rover'
    action: "avance" | "droite" | "gauche" | "stop" | "recule"
}
