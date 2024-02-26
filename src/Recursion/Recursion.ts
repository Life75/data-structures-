import Iteration from "../Contracts/Classes/Iteration";
import Timer from "../Contracts/Classes/Timer";

export default class Recursion {
    protected timer: Timer; 
    protected n: number;
    constructor(n: number) {
        this.timer = new Timer()
        this.n = n 
    }
    getN(): number {
        return this.n 
    }

    geTimer(): Timer {
        return this.timer
    }
}