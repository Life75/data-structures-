import Iteration from "../Classes/Iteration"

export default interface IIterations {
    addToIterations(iteration: Array<number>, lastMovedIndex: number): void 
    getIterations(): Iteration[]
    clearIterations(): void
}


