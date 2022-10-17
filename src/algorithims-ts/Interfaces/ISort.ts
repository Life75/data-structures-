export default interface ISort {
    /**
     * name
     */
    startSort(): void,
    getCurrentValues(): Array<number>, 
    
    getBeforeSortedValues(): Array<number>,
    getSortedValues(): Array<number>,
  
}