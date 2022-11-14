export default class Iteration {
    //holds an iteration array 
    private iteration: Array<number> = [];
    private lastIndexMoved: number;

    constructor(iteration: Array<number>) {
        this.iteration = [...iteration];
        this.lastIndexMoved = 0;
    }

    public getIteration(): Array<number> {
        return this.iteration;
    }

    public getIterationObject() {
        return this
    }

    public setIteration(iteration: Array<number>) {
        this.iteration = [...iteration];
    }
//TODO implement functionality
    public setLastIndexesMoved(){

    }

    public getLastIndexesMoved(){

    }
}

//Next should be able to make class give information on which elements were last moved 
//figure them out and be a boolean value. 
//todo

/*
Should I make this a class or interface. 
*/