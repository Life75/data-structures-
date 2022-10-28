export default class Timer {
    private startTime?: number;
    private interval?: number;
    private timer: number; 
    private endTime?: number;
    private performance?: number; 

    constructor() {
        //default 
        this.timer = 0;
        this.startTime = 0;
    }

    public start(): void {
        //starts timer 
        this.startTime = performance.now()
    }

    public stop(): void {
        this.endTime = performance.now();

        this.performance = this.endTime - this.startTime!;
    }

    public getTime(): number {

        return this.performance!;
    }
    
}

