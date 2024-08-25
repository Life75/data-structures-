import Node from "../Classes/Node"
export default interface ILinkedLists {

    push(payload: number): void 
    pop(): number | undefined
    peek(): Node | undefined  
    // TODO create a base class with an implementation to make this easier implementing seek operations 
    seek(num: number, animationSpeed?: number | undefined): Promise<void>  
    counter: number 
}