//this is an abstract that will be in charge of asking to request headers for RouterViews that have multiple different headers 
import {Header} from './Headers'
export default abstract class HeaderRequest {
    protected header

    constructor(header: Header) {
        this.header = header; 
    }

    public getHeader(): Header {
        return this.header;
    }

    public setHeader(header: Header): void {
        this.header = header
    }
}

//The reason for this dependency injection coupling is to make sure I remember to add a header for that specific type of data structure 