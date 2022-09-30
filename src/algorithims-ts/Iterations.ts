export default class Iteration {
    //holds an iteration array 
    private iteration: Array<number> = [];
    
    constructor(iteration: Array<number>) {
        this.iteration = [...iteration];
    }

    public getIteration(): Array<number> {
        return this.iteration;
    }

    public setIteration(iteration: Array<number>) {
        this.iteration = [...iteration];
    }
}