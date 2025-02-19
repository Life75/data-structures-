import IMetadata from "./IMetadata";

export default class ILinkedListController {
    private pushAction: (num: number) => void 

    constructor(pushAction: (num: number) => void) {
        this.pushAction = pushAction
    }

    push(num: number) {
        this.pushAction(num)
    }
}