import Node from "../Classes/Node"
export default interface ILinkedLists {

    push(payload: number): void 
    pop(): number | undefined
    peek(): Node | undefined  
    peekAll(): Array<Node>
}