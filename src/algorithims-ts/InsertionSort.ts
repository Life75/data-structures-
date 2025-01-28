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
        let movedIndexes: Array<MovedIndex> = [];
        
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                movedIndexes.push(new MovedIndex(Direction.left, j))
                movedIndexes.push(new MovedIndex(Direction.right, j+1))
                
                j = j - 1;
            }
            movedIndexes.push(new MovedIndex(Direction.right, i))
            arr[j + 1] = key;
            movedIndexes.push(new MovedIndex(Direction.right, j+1))
            this.addToIterations(arr, movedIndexes);
        }
    }


    getIterations(): Iteration[] {
        throw new Error("Method not implemented.");
    }
    clearIterations(): void {
        throw new Error("Method not implemented.");
    }
}