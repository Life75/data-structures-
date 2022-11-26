import Iteration from "../Contracts/Classes/Iteration";
import IIterations from "../Contracts/Interfaces/IIterations";
import ISort from "../Contracts/Interfaces/ISort";
import Sort from "./Sort";
//https://www.geeksforgeeks.org/quick-sort/
//TODO FIX ANIMATION AND ITERATIONS ON WHERE EACH ITERATION IS AT 
export default class QuickSort extends Sort implements ISort, IIterations {
    addToIterations(iteration: number[], lastMovedIndex: number): void {
        var iterationObject = new Iteration(iteration);
        iterationObject.setLastIndexesMoved(lastMovedIndex)
        this.iterations.push(iterationObject);
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
        console.log(this.values)
        this.quickSort(this.values, 0, this.values.length - 1);
        console.log(this.values);
        this.timer.stop();

        this.afterBeingSorted = [...this.values];

    }

    private quickSort(arr: Array<number>, low: number, high: number){
        if(low > high) {
            let part = this.partition(arr, low, high);
            this.quickSort(arr, low, part - 1);

            this.quickSort(arr, part+1, high);


            
        }

    }

    private partition(arr: Array<number>, low: number, high: number){
        let pivot = arr[high];
        let i = (low - 1);

        for(let j = low; j <= high -1; j++){
            if(arr[j] < pivot ){
                i++;
                this.swap(arr, i, j);
            }
        }
        this.swap(arr, i + 1, high);
        return (i + 1);
    }

    private swap(arr: Array<number>, i: number, j: number){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp; 
    }

    private isSorted() {
        return this.afterBeingSorted.length != 0;
      }
    //QuickSort 
    
}