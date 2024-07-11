import IMetadata from "./IMetadata";

export default interface ILinkedListController {
    pop: (num?: number) => number | void; 
    push: () => void; 
    peek: () => number | void, 
    seek: () => number | void
}