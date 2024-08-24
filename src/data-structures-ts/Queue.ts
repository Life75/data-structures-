import ILinkedLists from "../Contracts/Interfaces/ILinkedList";
import Node from "../Contracts/Classes/Node";

export default class Queue implements ILinkedLists {
  tracker: Array<Node> = []
  head: Node | undefined = new Node()
  tail: Node | undefined = undefined

  push(payload: number): void {
    const node = new Node()
    node.payload = payload

    if (!this.tail) {
      this.head = node
      this.tail = this.head
    }
    else {
      this.tail.nextNode = node
      this.tail = node
    }
    this.tracker.unshift(node)

  }
  pop(): number | undefined {
    if (this.head == this.tail) {
      this.tail = undefined
    }
    const payload = this.head?.payload
    this.head = this.head?.nextNode
    this.tracker.shift()
    return payload

  }
  peek(): Node | undefined {
    return this.head
  }

  peekAll(): Array<Node> {
    return this.tracker
  }

  async seek(num: number): Promise<void> {
    //lets seek the value 
    let pointer = this.head
    let defaultTime = 600
    let foundAdditionalTime = 800
      while (pointer) {
        pointer.isLit = true
        
        if(pointer.payload == num)
          pointer.classname = "bg-red-600 "
        
        await this.sleep( pointer.payload == num ? defaultTime + foundAdditionalTime : defaultTime )
        pointer.classname = ""
        pointer.isLit = false
        if(pointer.payload == num) break
        pointer = pointer.nextNode
      }  
  }

  sleep(millisec: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => { resolve() }, millisec);
    })
  }
}