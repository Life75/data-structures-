import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";

export default class Queue extends HeaderRequest implements ILinkedLists {
    private queue: Array<number> = []

    push(payload: number): void {
        this.queue.push(payload)
    }
    pop(): number | undefined {
       var firstIndex = undefined 

       if(this.queue.length != 0) {

            firstIndex = this.queue.shift()
       }

       return firstIndex
    }
    peek(): number | undefined {
        return this.queue[0]
    }

    peekAll(): Array<number> {
        return this.queue
    }
    
}