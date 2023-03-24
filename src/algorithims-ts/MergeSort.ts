import Sort from "./Sort";
import ISort from "../Contracts/Interfaces/ISort";
import IIterations from "../Contracts/Interfaces/IIterations";
import Iteration from "../Contracts/Classes/Iteration";
import MovedIndex from "../Contracts/Classes/MovedIndex";
import { Direction } from "../Contracts/Classes/Direction";

export default class MergeSort extends Sort implements ISort, IIterations {
  private arrClone : number[] = []

  startSort(): void {
    

    if (this.isSorted()) {
      this.values = [...this.beforeBeingSorted];
      console.log(this.arrClone)
    }
    this.timer.start();
    console.log(this.values)
    this.arrClone = Object.assign([], this.values)
    this.mergeSort(this.values, 0, this.values.length - 1);
    this.timer.stop();


    this.afterBeingSorted = [... this.values];
    console.log(this.afterBeingSorted)

  }//TODO make sure this works 

  mergeSort(arr: Array<number>, low: number, high: number) {
    if (low >= high) {
      return;
    }


    var middle = Math.floor((low + high) /2);
    this.mergeSort(arr, low, middle);
    this.mergeSort(arr, middle + 1, high);
    this.merge(arr, low, middle, high);
  }

  merge(arr: Array<number>, low: number, mid: number, high: number) {
    let i = low;
    let j = mid + 1;
    let k = 0;
    let movedIndexes: Array<MovedIndex> = []

    for(k = low; k <= high; k++)
    {
        this.arrClone[k] = arr[k];
        movedIndexes.push(new MovedIndex(Direction.left, k))

    }

    for(k = low; k <= high; k++)
    {
        if( i > mid)
        {
            arr[k] = this.arrClone[j];
            movedIndexes.push(new MovedIndex(Direction.left, j))
            j++;
        }
        else if(j > high)
        {
            arr[k] = this.arrClone[i];
            movedIndexes.push(new MovedIndex(Direction.left, j))

            i++;
        }
        else if(this.arrClone[i] > this.arrClone[j])
        {
            arr[k] = this.arrClone[j];
            movedIndexes.push(new MovedIndex(Direction.left, j))

            j++;
        }
        else
        {
            arr[k] = this.arrClone[i];
            movedIndexes.push(new MovedIndex(Direction.left, j))

            i++;
        }
    }
    //iteration done 
    this.addToIterations(this.arrClone, movedIndexes)
}

  getIterations(): Iteration[] {
    console.log(this.iterations)
    return this.iterations;
  }
  clearIterations(): void {
    this.iterations = [];
  }
}
