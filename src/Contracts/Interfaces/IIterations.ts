import Iteration from "../Classes/Iteration"

export default interface IIterations {
    addToIterations(iteration: Array<number>, movedIndexes: Array<number>): void 
    getIterations(): Iteration[]
    clearIterations(): void
}


