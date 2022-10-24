import Timer from "../Timer";

export default interface ISort {
    /**
     * name
     */
    startSort(): void,
    initArray(amountOfValues: number): void, 
    getCurrentValues(): Array<number>, 
    
    
    getBeforeSortedValues(): Array<number>,
    getSortedValues(): Array<number>,
    getTimer(): Timer,
  
}