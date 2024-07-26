import IMetadata from "./IMetadata";

export default class ILinkedListController {
    private pushAction: () => void 

    constructor(pushAction: () => void) {
        this.pushAction = pushAction
    }

    push() {
        this.pushAction()
    }
}