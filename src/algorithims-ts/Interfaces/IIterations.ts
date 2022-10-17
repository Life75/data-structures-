import Iteration from "../Iteration"

export default interface IIterations {
    addToIterations(iteration: Array<number>): void 
    getIterations(): Iteration[]
}