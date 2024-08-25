import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";
import Node from "../Contracts/Classes/Node";

export default class Stack implements ILinkedLists {
  head: Node | undefined
  counter = 0
  push(payload: number) {
    const node = new Node()
    node.payload = payload
    node.nextNode = this.head
    this.head = node
    this.counter++
  }

  pop(): number | undefined {
    const node = this.head
    this.head = this.head?.nextNode
    this.counter--
    return node?.payload
  }

  peek(): Node | undefined {
    return this.head
  }

  async seek(num: number, animationSpeed?: number): Promise<void> {
    //lets seek the value 
    let pointer = this.head
    let defaultTime = 600

    if (animationSpeed)
      animationSpeed > 0 ? defaultTime = animationSpeed : null

    let foundAdditionalTime = 800
    while (pointer) {
      pointer.isLit = true

      if (pointer.payload == num)
        pointer.classname = "bg-red-600 "

      await this.sleep(pointer.payload == num ? defaultTime + foundAdditionalTime : defaultTime)
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