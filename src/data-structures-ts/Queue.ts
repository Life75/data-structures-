import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";

export default class Queue extends HeaderRequest implements ILinkedLists {
    private queue: Array<number> = []

    push(payload: number): void {
        this.queue.push(payload)
    }
    pop(): number | undefined {
       var firstIndex = this.queue[0]

       if(firstIndex != undefined) {
            this.queue.slice(0,1)
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