import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";

class Node {
    payload: number = Number.MAX_SAFE_INTEGER 
    nextNode: Node | undefined 

    constructor() {
    }

    setNode(payload: number , nextNode: Node) {
        this.payload = payload
        this.nextNode = nextNode
    }
}

export default class Stack extends HeaderRequest implements ILinkedLists {
    head: Node | undefined 
    push(payload: number) {
        const node = new Node()
        node.payload = payload
        node.nextNode = this.head 
        
        this.head = node
    }

    pop(): number | undefined {
        return 0
    }

    peek(): number | undefined {
        return 0 
    }

    peekAll(): Array<number> {
        return []
    }

    
}