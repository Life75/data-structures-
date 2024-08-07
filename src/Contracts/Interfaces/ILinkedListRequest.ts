import ILinkedListController from "./ILinkedListController";
import IMetadata from "./IMetadata";
import IHeaderRequest from "./IHeaderRequest";

export default interface ILinkedListRequest extends IHeaderRequest<ILinkedListController> {
    /*controller: ILinkedListController, 
    metadata: IMetadata*/
    pushAction: (num: number) => void 
}