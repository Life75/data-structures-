import Timer from "../Classes/Timer";
import IMetadata from "./IMetaData";
import ISortController from "./ISortController";
import {Ref} from "vue"

export default interface ISortRequest {
    controller: ISortController, 
    metadata: IMetadata,
    timer: Ref<Timer>, 
}