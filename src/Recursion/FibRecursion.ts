import Snapshots from "../Contracts/Classes/Snapshots";
import IRecursion from "./IRecursion";
import Recursion from "./Recursion";

//I'll need to think about implementing this logic specifically 
export default class FibannociRecursion extends Recursion implements IRecursion{
      startRecursion(): void {
          
      }

      fibanocciRecursion(n: number): number {
        if(n <= 1) {
            return n 
        }
        else {
            return this.fibanocciRecursion(n-2) + this.fibanocciRecursion(n-1)
        }
      }
    
}