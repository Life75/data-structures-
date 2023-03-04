import Sort from "./Sort";
import ISort from "../Contracts/Interfaces/ISort";
import IIterations from "../Contracts/Interfaces/IIterations";
import Iteration from "../Contracts/Classes/Iteration";

export default class MergeSort extends Sort implements ISort, IIterations {
    startSort(): void {
        if(this.isSorted()) {
            this.values = [...this.beforeBeingSorted];
        }
        
        this.timer.start()
        this.mergeSort(this.values, 0, this.values.length - 1)
    }

    mergeSort(arr: Array<number>, left: number, right: number) {
        if(left >= right) {
            return;
        }

        var middle = left + ((right - left)/2)
        this.mergeSort(arr, left, middle)
        this.mergeSort(arr, middle + 1, right)
        this.merge(arr, left, middle, right)
    }


    merge(arr: Array<number>, left: number, mid: number, right: number)
{
    var n1 = mid - left + 1;
    var n2 = right - mid;
  
    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    var i = 0;
  
    // Initial index of second subarray
    var j = 0;
  
    // Initial index of merged subarray
    var k = left;
    //figure out where to put push 
    while (i < n1 && j < n2) {
        const swappedIndex = [];
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            //swappedIndex.push(k)
            //swappedIndex.push(i)
            i++;
        }
        else {
            arr[k] = R[j];
            //swappedIndex.push(k)

            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

    addToIterations(iteration: number[], movedIndexes: number[]): void {
        var iterationObject = new Iteration(iteration);
        iterationObject.setLastIndexesMoved(movedIndexes);
        this.iterations.push(iterationObject)
    }
    getIterations(): Iteration[] {
        return this.iterations;
    }
    clearIterations(): void {
        this.iterations = []
    }

}