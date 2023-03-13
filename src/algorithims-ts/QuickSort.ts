import { Direction } from "../Contracts/Classes/Direction";
import Iteration from "../Contracts/Classes/Iteration";
import MovedIndex from "../Contracts/Classes/MovedIndex";
import IIterations from "../Contracts/Interfaces/IIterations";
import ISort from "../Contracts/Interfaces/ISort";
import Sort from "./Sort";
//https://www.geeksforgeeks.org/quick-sort/
export default class QuickSort extends Sort implements ISort, IIterations {
    addToIterations(iteration: number[], movedIndexes: Array<MovedIndex>): void {
        var iterationObject = new Iteration(iteration);
        iterationObject.setLastIndexesMoved(movedIndexes)
        this.iterations.push(iterationObject);
       // console.log(iterationObject.getLastIndexesMoved())
    }
    getIterations(): Iteration[] {
        return this.iterations;
    }
    clearIterations(): void {
        this.iterations = []
    }
    startSort(): void {
        if(this.isSorted()){
            this.values = [...this.beforeBeingSorted];
        }

        this.timer.start();
        this.quickSort(this.values, 0, this.values.length - 1);
        this.timer.stop();

        this.afterBeingSorted = [...this.values];

    }

    private quickSort(arr: Array<number>, low: number, high: number){
        if(low < high) {
            let part = this.partition(arr, low, high);
            this.quickSort(arr, low, part - 1);
            this.quickSort(arr, part+1, high);
        }

    }

    private partition(arr: Array<number>, low: number, high: number){
        let movedIndexes: Array<MovedIndex> = []
        let pivot = arr[high];
        let i = (low - 1);

        for(let j = low; j <= high -1; j++){
            if(arr[j] < pivot ){
                i++;
                this.swap(arr, i, j);

                movedIndexes.push(new MovedIndex(Direction.left, i));
                movedIndexes.push(new MovedIndex(Direction.right, j));
            }
        }
        this.swap(arr, i + 1, high);
        movedIndexes.push(new MovedIndex(Direction.left, i+1))
        movedIndexes.push(new MovedIndex(Direction.right, high))
        this.addToIterations(arr, movedIndexes);
        
        return (i + 1);
    }

    private swap(arr: Array<number>, i: number, j: number): number{
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp; 
        

        return j
    }


    //QuickSort 
    
}