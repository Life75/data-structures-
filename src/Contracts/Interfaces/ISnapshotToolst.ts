import Snapshot from "../Classes/Snapshot";

/*
The idea behind this interface is that each respected algorithim has a common concept of "states"
Those states might be hard to capture doing just "push/add" to the snapshot class itself. So a good workaround is having where each class that has ISnapShot can create 
its own way of implementing states. This will make it very generic for the AnimateEngine to run and display for any type of algorithim

*/
export default interface ISnapshotTools<T> {
    createSnapshot(entity: unknown): Snapshot<T> //placed as unknown be cause we don't know how it will create and configure the given entity 
    
}