//this is an interface that will be in charge of asking to request headers for RouterViews that have multiple different headers 
//todo
export default abstract class HeaderRequest {
    protected header = ''

    public getHeader(): string {
        return this.header;
    }

    public setHeader(header: string): void {
        this.header = header
    }
}