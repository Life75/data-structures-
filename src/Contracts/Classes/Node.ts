import { v4 as uuidv4 } from 'uuid'
import NodeStyles from './NodeStyles'
export default class Node extends NodeStyles {
    payload: number = Number.MAX_SAFE_INTEGER 
    nextNode: Node | undefined
    id: string =  uuidv4()

    constructor() {
        super()
    }

    setNode(payload: number, nextNode: Node) {
        this.payload = payload
        this.nextNode = nextNode
    }
}