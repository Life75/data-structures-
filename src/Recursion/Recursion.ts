import Iteration from "../Contracts/Classes/Iteration";
import Timer from "../Contracts/Classes/Timer";

export default class Recursion {
    protected timer: Timer; 
    protected n: number;
    protected frames: Iteration[] = []
    constructor(n: number) {
        this.timer = new Timer()
        this.n = n 
    }


}