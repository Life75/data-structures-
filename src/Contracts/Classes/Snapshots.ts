import Snapshot from "./Snapshot"
export default class Snapshots<T> { //try to implement this logic into the Sort functionality later on to make it more generic 
    private snapshots: Array<Snapshot<T>> = []

    public getSnapshots(): Array<Snapshot<T>> {
        return this.snapshots
    }

    public addSnapshot(snapshot: Snapshot<T>): void {
        this.snapshots.push(snapshot)
    }
}