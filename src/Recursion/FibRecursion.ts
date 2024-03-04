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

      fibanocciRecursion(n: number): number {
        //test this logic, should give us the current states throughout the recursion 
        this.addSnapshot(this.createSnapshot(n))
        if(n <= 1) {
            return n 
        }
        else {
            return this.fibanocciRecursion(n-2) + this.fibanocciRecursion(n-1)
        }
      }
}