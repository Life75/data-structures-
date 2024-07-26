import ILinkedLists from "../Contracts/Interfaces/ILinkedList";
import { v4 as uuidv4 } from 'uuid'
class Node {
    payload: number = Number.MAX_SAFE_INTEGER 
    nextNode: Node | undefined
    id: string =  uuidv4()

    constructor() {
    }

    setNode(payload: number , nextNode: Node) {
        this.payload = payload
        this.nextNode = nextNode
    }
}

export default class Queue implements ILinkedLists {
    head: Node | undefined = new Node()
    tail: Node | undefined = undefined 

    push(payload: number): void {
      const node = new Node() 
      node.payload = payload 

      if(!this.tail) {
        this.head = node 
        this.tail = this.head 
      }
      else {
        this.tail.nextNode = node 
        this.tail = node 
      }

    }
    pop(): number | undefined {
        if(this.head == this.tail) {
            this.tail = undefined 
        }
        const payload = this.head?.payload 
        this.head = this.head?.nextNode

        return payload
       
    }
    peek(): number | undefined {
        return 1
    }

    peekAll(): Array<number> {
        return []
    }
    
}