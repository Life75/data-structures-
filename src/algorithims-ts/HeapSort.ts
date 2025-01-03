import IIterations from '../Contracts/Interfaces/IIterations';
import ISort from '../Contracts/Interfaces/ISort';
import MovedIndex from '../Contracts/Classes/MovedIndex';
import { Direction } from "../Contracts/Classes/Direction";
import Sort from "./Sort";

export default class HeapSort extends Sort implements ISort, IIterations {
    public startSort(): void {
        if(this.isSorted()) {
            this.values = [...this.beforeBeingSortedValues];
        }

        this.timer.start();
        this.heapSort(this.values);
        this.timer.stop();
    }

    private heapSort(arr: Array<number>) {
        let n = arr.length;
        let movedIndexes: Array<MovedIndex> = [];

        // Build heap (rearrange array)
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i, moveIndexes);
            this.addToIterations(movedIndexes);
        }
        //TODO make sure this is works 
        // One by one extract an element from heap
        for (let i = n - 1; i > 0; i--) {
            // Move current root to end
            let temp = arr[0];
            arr[0] = arr[i];
          //  movedIndexes.push(new MovedIndex(Direction.left, i));
            arr[i] = temp;
          //  movedIndexes.push(new MovedIndex(Direction.right, 0));
            // call max heapify on the reduced heap
            heapify(arr, i, 0);

        }
    }   

    private heapify(arr: Array<number>, n: number, i: number, movedIndexes: Array<MovedIndex>) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (l < n && arr[l] > arr[largest]) {
            largest = l;
        }
    
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest]) {
            largest = r;
        }

        // If largest is not root
        if (largest !== i) {
            let temp = arr[i]; // Swap
            arr[i] = arr[largest];
            movedIndexes.push(new MovedIndex(Direction.left, i));
            arr[largest] = temp;
            movedIndexes.push(new MovedIndex(Direction.right, largest));
    
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }
}