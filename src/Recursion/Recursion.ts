import Iteration from "../Contracts/Classes/Iteration";
import Snapshots from "../Contracts/Classes/Snapshots";
import Timer from "../Contracts/Classes/Timer";

export default class Recursion extends Snapshots<Array<number>> {
    protected timer: Timer; 
    protected n: number;
    constructor(n: number) {
        super();
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