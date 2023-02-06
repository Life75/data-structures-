import Iteration from "../Classes/Iteration"

export default interface IIterations {
    addToIterations(iteration: Array<number>, lastMovedIndex: number, swappedIndex: number): void 
    getIterations(): Iteration[]
    clearIterations(): void
}


