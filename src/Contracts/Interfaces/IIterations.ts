import Iteration from "../Classes/Iteration"

export default interface IIterations {
    addToIterations(iteration: Array<number>): void 
    getIterations(): Iteration[]
}


