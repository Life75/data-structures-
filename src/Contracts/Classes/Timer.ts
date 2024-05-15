export default class Timer {
    private startTime?: number;
    private endTime?: number;
    private performance?: number; 

    constructor() { 
        this.startTime = 0;
    }

    public start(): void {
        this.startTime = performance.now()
    }

    public stop(): void {
        this.endTime = performance.now();

        this.performance = this.endTime - this.startTime!;
    }

    public getTime(): Number {
        //may be best to convert this to a string and read it later 
        return Math.trunc(Number(this.performance!)) ?  Math.trunc(Number(this.performance!)) : 0
    }
    
}

