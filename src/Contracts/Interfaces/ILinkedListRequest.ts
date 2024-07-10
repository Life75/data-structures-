import ILinkedListController from "./ILinkedListController";
import IMetadata from "./IMetadata";

export default interface ILinkedListRequest {
    controller: ILinkedListController, 
    metadata: IMetadata
}