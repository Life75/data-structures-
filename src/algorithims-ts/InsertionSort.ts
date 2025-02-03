import Sort from "./Sort";
import IIterations from "../Contracts/Interfaces/IIterations";
import ISort from "../Contracts/Interfaces/ISort";
import Iteration from "../Contracts/Classes/Iteration";
import MovedIndex from "../Contracts/Classes/MovedIndex";
import { Direction } from "../Contracts/Classes/Direction";

export default class InsertionSort extends Sort implements ISort, IIterations {

    startSort(): void {
        if (this.isSorted()) {
            this.values = [...this.beforeBeingSorted];
        }

        this.timer.start();
        this.insertionSort(this.values);
        this.timer.stop();

        this.afterBeingSorted = [...this.values];
    }

    private insertionSort(arr: Array<number>) {
        let n = arr.length;
        
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                var movedIndexes: Array<MovedIndex> = [] 
                movedIndexes.push(new MovedIndex( Direction.left , j+1))
                movedIndexes.push(new MovedIndex( Direction.right, j))
                         
                this.addToIterations(this.values, movedIndexes);
                j = j - 1;
            }
            var movedIndexes: Array<MovedIndex> = [] 

            movedIndexes.push(new MovedIndex(Direction.right, i))
            arr[j + 1] = key;
            this.addToIterations(arr, movedIndexes);
        }
    }

    getIterations(): Iteration[] {
        return this.iterations;
    }
    clearIterations(): void {
        this.iterations = []
    }
}