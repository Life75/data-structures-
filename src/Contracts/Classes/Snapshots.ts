export default class Snapshots<T> { //try to implement this logic into the Sort functionality later on to make it more generic 
    private snapshots: Array<T> = []

    public getSnapshots(): Array<T> {
        return this.snapshots
    }

    public addSnapshot(snapshot: T): void {
        this.snapshots.push(snapshot)
    }



}