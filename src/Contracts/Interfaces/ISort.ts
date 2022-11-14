import Timer from "../Classes/Timer";

export default interface ISort {

    startSort(): void,
    initArray(amountOfValues: number): void, 
    getCurrentValues(): Array<number>, 
    
    
    getBeforeSortedValues(): Array<number>,
    getSortedValues(): Array<number>,
    getTimer(): Timer,
  
}