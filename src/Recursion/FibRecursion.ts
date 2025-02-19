import Snapshot from "../Contracts/Classes/Snapshot";
import Snapshots from "../Contracts/Classes/Snapshots";
import ISnapshotTools from "../Contracts/Interfaces/ISnapshotToolst";
import IRecursion from "./IRecursion";
import Recursion from "./Recursion";

//I'll need to think about implementing this logic specifically 
export default class FibannociRecursion extends Recursion implements IRecursion, ISnapshotTools<Array<number>>{
    private currentState: Array<number> = []
    

      createSnapshot(entity: number): Snapshot<Array<number>> {
        this.currentState.push(entity) //keeps track of the current state of the class 
        return new Snapshot(this.currentState) 
      }

      startRecursion(): void {
          this.fibanocciRecursion(super.getN())
      }

      start() {
        this.fibanocciRecursion(super.getN())
        this.setRecursiveOutput(this.getSummation())
      }

      getSummation(): number {
        let total = 0
        this.currentState.forEach((el) => {
          total += el
        })
        return total
      }

      fibanocciRecursion(n: number): number {
        //test this logic, should give us the current states throughout the recursion 
        //later we should track the f(n) and list them within the reciever 
        this.addSnapshot(this.createSnapshot(n))
        if(n <= 1) {
            return n 
        }
        else {
            return this.fibanocciRecursion(n-1) + this.fibanocciRecursion(n-2)
        }
      }


      getCurrentState(): Array<number> {
        return this.currentState
      }
}