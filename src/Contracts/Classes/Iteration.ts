export default class Iteration {
    //holds an iteration array 
    private iteration: Array<number> = [];
    private lastIndexesMoved: number = 0;

    constructor(iteration: Array<number>) {
        this.iteration = [...iteration];
        
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
    
    public setLastIndexesMoved(lastIndexesMoved: number){
        this.lastIndexesMoved = lastIndexesMoved
    }

    public getLastIndexesMoved(): number{
        return this.lastIndexesMoved;
    }
}

//Next should be able to make class give information on which elements were last moved 
//figure them out and be a boolean value. 
//todo

/*
Should I make this a class or interface. 
*/