import Timer from "../Classes/Timer";
import IMetadata from "./IMetadata";
import ISortController from "./ISortController";
import {Ref} from "vue"

export default interface ISortRequest {
    controller: ISortController, 
    metadata: IMetadata,
}