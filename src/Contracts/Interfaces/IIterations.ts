import Iteration from "../Classes/Iteration"
import MovedIndex from "../Classes/MovedIndex"

export default interface IIterations {
    addToIterations(iteration: Array<number>, movedIndexes: Array<MovedIndex>): void 
    getIterations(): Iteration[]
    clearIterations(): void
}


