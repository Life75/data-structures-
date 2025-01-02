import Timer from "../Classes/Timer";

export default interface ISort {

    startSort(): void,
    getBeforeSortedValues(): Array<number>,
    getSortedValues(): Array<number>,
    getTimer(): Timer,
  
}