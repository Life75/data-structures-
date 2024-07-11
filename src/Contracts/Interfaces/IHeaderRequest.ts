import IMetadata from "./IMetadata"
import {extend} from '@vue/shared'

const component = extend({})
type VueComponent = InstanceType<typeof component>

export default interface IHeaderRequest<T> {
    controller: T
    metadata: IMetadata, 
    component: VueComponent
}


