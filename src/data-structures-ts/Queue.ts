import ILinkedLists from "../Contracts/Interfaces/ILinkedList";
import Node from "../Contracts/Classes/Node";

export default class Queue implements ILinkedLists {
    tracker: Array<Node> = []
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
      this.tracker.push(node)

    }
    pop(): number | undefined {
        if(this.head == this.tail) {
            this.tail = undefined 
        }
        const payload = this.head?.payload 
        this.head = this.head?.nextNode

        return payload
       
    }
    peek(): Node | undefined {
        return this.head 
    }

    peekAll(): Array<Node> {
        return this.tracker
    }
    
}