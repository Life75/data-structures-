import IIterations from '../Contracts/Interfaces/IIterations';
import ISort from '../Contracts/Interfaces/ISort';
import MovedIndex from '../Contracts/Classes/MovedIndex';
import { Direction } from "../Contracts/Classes/Direction";
import Sort from "./Sort";
import Iteration from '../Contracts/Classes/Iteration';

export default class HeapSort extends Sort implements ISort, IIterations {
    getIterations(): Iteration[] {
        throw new Error('Method not implemented.');
    }
    clearIterations(): void {
        throw new Error('Method not implemented.');
    }
    public startSort(): void {
        if(this.isSorted()) {
           // this.values = [...this.beforeBeingSortedValues];
        }

        this.timer.start();
        this.heapSort(this.values);
        this.timer.stop();
    }

    private heapSort(arr: Array<number>) {
        let n = arr.length;
        let movedIndexes: Array<MovedIndex> = [];

        // Build heap (rearrange array)
     

    }

    
}