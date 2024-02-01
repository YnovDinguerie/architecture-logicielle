export enum DirectionEnum {
	Forward = 1,
	Backward = -1,
}

export class Direction {
	constructor(public readonly _direction: DirectionEnum) { }
}
