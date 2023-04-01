import ILinkedLists from "../Contracts/Interfaces/ILinkedList";

export default class Stack implements ILinkedLists {
    private stack: Array<number> = [] 

    push(payload: number) {
        this.stack.push(payload)
    }

    pop(): number | undefined {
        return this.stack.pop()
    }

    peek(): number {
        return this.stack[this.stack.length]
    }
    
}