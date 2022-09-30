import ISort from "./ISort";

export default class BubbleSort implements ISort {
    //Makes random array, 
    //needs to have a timer class that extends to the sort to keep track of how long algo takes 
    private values: number[];
    private beforeBeingSorted: number[];
    private afterBeingSorted: number[];
    private amountOfValues: number;
    private iterations: number[][] = []

    constructor(amountOfValues: number) {
        this.amountOfValues = amountOfValues;
        this.values = [];
        this.beforeBeingSorted = [];
        this.afterBeingSorted = [];

        //make random values
        this.initArray(this.amountOfValues);
        this.beforeBeingSorted = [...this.getCurrentValues()]; 
    }

    public initArray(amount: number) {
        this.amountOfValues = amount
        this.values = [];
        //this.iterations =  [[], []]

        if(this.amountOfValues) {
            for(var i=0; i< this.amountOfValues; i++) {
                this.addNumToArray(Math.floor(Math.random() * 500))
            }
            //once finished this is the complete random array of values 
            this.beforeBeingSorted = [...this.values]
        }
    }

    private addNumToArray(num: number) {
        this.values.push(num);
    }

    public startSort(): void {
        //this.addToIterations(this.values)
        for(var i=0; i < this.values.length; i++) {
            for(var j=0; j < this.values.length - i; j++) {
                if(this.values[j] > this.values[j+1]) {
                    var temp = this.values[j];
                    this.values[j] = this.values[j + 1];
                    this.values[j + 1] = temp;
                    //console.log(this.values);
                    console.log(this.values);
                    
                }
                //this.addToIterations(this.values)
                this.addToIterations(this.values)

            }

           // console.log(this.values);
            //end of sort place this in sorted values 
            this.afterBeingSorted = [...this.values];
        }
    }

    public addToIterations(iteration: Array<number>) {
        this.iterations.push(iteration)

        if(this.iterations[this.iterations.length - 1] == this.iterations[this.iterations.length-2]) {
            console.log("the same")
        }
        console.log(this.iterations[this.iterations.length - 1])
        console.log(this.iterations[this.iterations.length-2])
        

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
    
    public getIterations(): number[][] {
        console.log("getting iterations")
        return this.iterations;
    }
}