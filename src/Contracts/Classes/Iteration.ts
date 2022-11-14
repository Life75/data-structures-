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

//Next should be able to make class give information on which elements were last moved 
//figure them out and be a boolean value. 
//todo

/*
Should I make this a class or interface. 
*/