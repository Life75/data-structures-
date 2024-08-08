import ILinkedListController from "./ILinkedListController";
import IMetadata from "./IMetadata";
import IHeaderRequest from "./IHeaderRequest";
import ILinkedLists from "./ILinkedList";

export default interface ILinkedListRequest extends IHeaderRequest, ILinkedLists {
    /*controller: ILinkedListController, 
    metadata: IMetadata*/
}