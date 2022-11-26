import Iteration from "../Contracts/Classes/Iteration";
import Timer from "../Contracts/Classes/Timer";
export default class Sort {
    protected values: number[];
    protected beforeBeingSorted: number[];
    protected afterBeingSorted: number[];
    protected amountOfValues: number;
    protected iterations: Iteration[] = [];
    protected timer: Timer;
    
    constructor(amountOfValues: number) {
        this.timer = new Timer();
        this.amountOfValues = amountOfValues;
        this.values = [];
        this.beforeBeingSorted = [];
        this.afterBeingSorted = [];
        this.iterations = [];
        //make random values
        this.initArray(this.amountOfValues);
        this.beforeBeingSorted = [...this.getCurrentValues()];
    }
    //Makes random array,
    public initArray(amount: number) {
        this.amountOfValues = amount;
        this.values = [];
        this.iterations = [] as Iteration[];
        
        if (this.amountOfValues) {
          for (var i = 0; i < this.amountOfValues; i++) {
            this.values.push(Math.floor(Math.random() * 500));
          }
          //once finished this is the complete random array of values
          this.beforeBeingSorted = [...this.values];
        }
      }
    getCurrentValues(): number[] {
        return this.values;
    }
    getBeforeSortedValues(): number[] {
        return this.beforeBeingSorted;
    }
    getSortedValues(): number[] {
        return this.afterBeingSorted;
    }
    getTimer(): Timer {
        return this.timer;
    }
}