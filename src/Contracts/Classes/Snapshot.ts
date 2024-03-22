//this is basically a data class 

export default class Snapshot<T> {
    private snapshot: T 


    constructor(snapshot: T) {
        const snap = {... snapshot}
        this.snapshot = snap
    }


}