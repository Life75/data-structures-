//this is an abstract that will be in charge of asking to request headers for RouterViews that have multiple different headers (you can pass components and setup the type)
import {extend} from '@vue/shared'

const component = extend({})
type VueComponent = InstanceType<typeof component>

export default abstract class HeaderRequest {
    private header: VueComponent

    constructor(header: VueComponent) {
        this.header = header; 
    }

    public getHeader(): VueComponent {
        return this.header;
    }

    public setHeader(header: VueComponent): void {
        this.header = header
    }
}

//The reason for this dependency injection coupling is to make sure I remember to add a header for that specific type of data structure 