import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";

class Node {
    payload: number = Number.MAX_SAFE_INTEGER 
    nextNode: Node | undefined 

    constructor(payload: number, nextNode: Node | undefined) {
        this.payload = payload
        this.nextNode = nextNode
    }
}

export default class Queue extends HeaderRequest implements ILinkedLists {
    head: Node | undefined 
    tail: Node | undefined 
    push(payload: number): void {
        if(!this.head) {
            this.head = new Node(payload, undefined)
            this.tail = this.head 
        }
        else {
            const newNode = new Node(payload, this.tail)
            this.tail = newNode 
        }

    }
    pop(): number | undefined {
       const node = this.head 
       this.head = this.head?.nextNode
       return node?.payload 
    }
    peek(): number | undefined {
        return 1
    }

    peekAll(): Array<number> {
        return []
    }
    
}