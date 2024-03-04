//this is basically a data class 

export default class Snapshot<T> {
    private snapshot: T 


    constructor(snapshot: T) {
        this.snapshot = snapshot
    }


}