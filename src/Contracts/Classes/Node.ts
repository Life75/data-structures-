import { v4 as uuidv4 } from 'uuid'
export default class Node {
    payload: number = Number.MAX_SAFE_INTEGER 
    nextNode: Node | undefined
    id: string =  uuidv4()

    constructor() {
    }

    setNode(payload: number, nextNode: Node) {
        this.payload = payload
        this.nextNode = nextNode
    }
}