import { Direction } from "./Direction";


export default class MovedIndex {
    private direction: Direction;
    private index: number;

    constructor(direction: Direction, index: number) {
        this.direction = direction;
        this.index = index;
    }

    getMovedIndex(): number {
        return this.index;
    }

    getDirection(): Direction {
        return this.direction;
    }

    setMovedIndex(number: number): void {
        this.index = number;
    }

    setDirection(direction: Direction): void {
        this.direction = direction
    }
}