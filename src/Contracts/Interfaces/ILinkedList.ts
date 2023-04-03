export default interface ILinkedLists {

    push(payload: number): void 
    pop(): number | undefined
    peek(): number | undefined
    peekAll(): Array<number>
}