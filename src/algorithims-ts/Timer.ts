export default class Timer {
    private startTime?: number;
    private interval?: number;
    private timer: number; 

    constructor() {
        //default 
        this.timer = 0;
        this.startTime = 0;
    }

    public start(): void {
        //starts timer 
        this.startTime = Date.now();
        this.interval = setInterval(() => {
            var elapsedTime = Date.now() - this.startTime!;
            this.timer = (elapsedTime / 1000);
        })
    }

    public stop(): void {
        clearInterval(this.interval)
    }

    public getTime(): number {
        return this.timer;
    }
    
}

