import ILinkedLists from "../Contracts/Interfaces/ILinkedList";
import Node from "../Contracts/Classes/Node";

export default class Queue implements ILinkedLists {
  head: Node | undefined 
  tail: Node | undefined = undefined

  push(payload: number): string {
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
    return node.id

  }
  pop(): number | undefined {
    if (this.head == this.tail) {
      this.tail = undefined
    }
    const payload = this.head?.payload
    this.head = this.head?.nextNode

    return payload
  }
  peek(): Node | undefined {
    return this.head
  }
  //create a base class with an implementation to make this easier implementing seek operations 
  async seek(num: number, animationSpeed?: number): Promise<void> {
    //lets seek the value 
    let pointer = this.head
    let defaultTime = 100
    
    if(animationSpeed)
      animationSpeed > 0 ? defaultTime = animationSpeed : null 

    let foundAdditionalTime = 800
    while (pointer) {
      pointer.isLit = true

      //found 
      if (pointer.payload == num)
        pointer.classname = "bg-red-600 "


      await this.sleep(pointer.payload == num ? (defaultTime - (animationSpeed || 0)) + foundAdditionalTime : defaultTime)
      pointer.classname = ""
      pointer.isLit = false

      if (pointer.payload == num) break
      pointer = pointer.nextNode
    }
  }

  sleep(millisec: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => { resolve() }, millisec);
    })
  }
}