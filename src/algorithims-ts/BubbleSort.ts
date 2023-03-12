import IIterations from "../Contracts/Interfaces/IIterations"
import ISort from "../Contracts/Interfaces/ISort";
import Timer from "../Contracts/Classes/Timer";
import Iteration from "../Contracts/Classes/Iteration";
import Sort from "./Sort";
import MovedIndex from "../Contracts/Classes/MovedIndex";
import { Direction } from "../Contracts/Classes/Direction";

export default class BubbleSort extends Sort implements ISort, IIterations {
  public startSort(): void {
    //start the timer
    //make sure the values aren't already sorted
    if (this.isSorted()) {
      this.values = [...this.beforeBeingSorted];
    }

    this.timer.start();
    for (var i = 0; i < this.values.length; i++) {
      for (var j = 0; j < this.values.length - i; j++) {
        if (this.values[j] > this.values[j + 1]) {
          var temp = this.values[j];
          this.values[j] = this.values[j + 1];//LEFT 2 1
          this.values[j + 1] = temp; //RIGHT 

          var movedIndexes: Array<MovedIndex> = [] 
          movedIndexes.push(new MovedIndex( Direction.left , j+1))
          movedIndexes.push(new MovedIndex( Direction.right, j))
          
          this.addToIterations(this.values, movedIndexes);
        
        }
      }
    }
    this.timer.stop();
    this.afterBeingSorted = [...this.values];
  }

  isSorted() {
    return this.afterBeingSorted.length != 0;
  }

  public addToIterations(iteration: Array<number>, movedIndexes: Array<MovedIndex>) {
    var iterationObject = new Iteration(iteration);
    iterationObject.setLastIndexesMoved(movedIndexes)
    this.iterations.push(iterationObject);
  }

  getBeforeSortedValues(): number[] {
    return this.beforeBeingSorted;
  }
  getSortedValues(): number[] {
    return this.afterBeingSorted;
  }

  getAmountOfValues(): number {
    return this.amountOfValues;
  }

  public getIterations(): Iteration[] {
    return this.iterations;
  }

  public getTimer(): Timer {
    return this.timer;
  }

  public clearIterations(): void {
    this.iterations = []
  }
}
