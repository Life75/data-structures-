import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";
import Node from "../Contracts/Classes/Node";

export default class Stack implements ILinkedLists {
  head: Node | undefined
 
  push(payload: number): string {
    const node = new Node()
    node.payload = payload
    node.nextNode = this.head
    this.head = node

    return node.id
  }

  pop(): number | undefined {
    const node = this.head
    this.head = this.head?.nextNode
    return node?.payload
  }

  peek(): Node | undefined {
    return this.head
  }
  
  async seek(num: number, animationSpeed?: number): Promise<void> {
    //lets seek the value 
    let pointer = this.head
    let defaultTime = 100

    if (animationSpeed)
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