import IIterations from "./Interfaces/IIterations";
import ISort from "./Interfaces/ISort";
import Timer from "./Timer";
import Iteration from "./Iteration";

export default class BubbleSort implements ISort, IIterations {
  //Makes random array,
  private values: number[];
  private beforeBeingSorted: number[];
  private afterBeingSorted: number[];
  private amountOfValues: number;
  private iterations: Iteration[] = [];
  private timer: Timer;

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

  public initArray(amount: number) {
    this.amountOfValues = amount;
    this.values = [];

    this.iterations = [];
    if (this.amountOfValues) {
      for (var i = 0; i < this.amountOfValues; i++) {
        this.addNumToArray(Math.floor(Math.random() * 500));
      }
      //once finished this is the complete random array of values
      this.beforeBeingSorted = [...this.values];
    }
  }

  private addNumToArray(num: number) {
    this.values.push(num);
  }

  public startSort(): void {
    //start the timer
    //make sure the values aren't already sorted
    if (this.isSorted()) {
      this.values = [...this.beforeBeingSorted];
    }

    this.timer.start();
    for (var i = 0; i < this.values.length; i++) {
      for (var j = 0; j < this.values.length - i; j++) {
        if (this.values[j] > this.values[j + 1]) {
          var temp = this.values[j];
          this.values[j] = this.values[j + 1];
          this.values[j + 1] = temp;
          this.addToIterations(this.values);
        }
      }
    }
    this.timer.stop();
    this.afterBeingSorted = [...this.values];
  }

  private isSorted() {
    return this.afterBeingSorted.length != 0;
  }

  public addToIterations(iteration: Array<number>) {
    var iterationObject = new Iteration(iteration);
    this.iterations.push(iterationObject);
  }

  public getCurrentValues(): Array<number> {
    return this.values;
  }

  getBeforeSortedValues(): number[] {
    return this.beforeBeingSorted;
  }
  getSortedValues(): number[] {
    return this.afterBeingSorted;
  }

  getAmountOfValues(): number {
    return this.amountOfValues;
  }

  public getIterations(): Iteration[] {
    return this.iterations;
  }

  public getTimer(): Timer {
    return this.timer;
  }
}
