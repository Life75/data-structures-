import HeaderRequest from "../Contracts/Classes/HeaderRequest";
import ILinkedLists from "../Contracts/Interfaces/ILinkedList";

export default class Stack extends HeaderRequest implements ILinkedLists {
    private stack: Array<number> = [] 

    push(payload: number) {
        this.stack.push(payload)
    }

    pop(): number | undefined {
        return this.stack.pop()
    }

    peek(): number | undefined {
        return this.stack[this.stack.length]
    }

    peekAll(): Array<number> {
        return this.stack
    }

    
}