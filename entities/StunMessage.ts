

export default class StunMessage {
    public header:IStunHeader; 
    private data: Buffer;
    private rinfo:IRInfo
    constructor(data:Buffer, rinfo: IRInfo){
        this.data = data; 
        this.rinfo = rinfo; 
        this.parseHeader();
        this.parseAttributes();
    }
    
    private parseAttributes() : void {
    
    }
    private parseHeader() : void {
        const header : IStunHeader = {
            zeroes:this.data.slice(0,1),
            type:this.data.slice(0,2),
            length:this.data.slice(2,4),
            magicCookie:this.data.slice(4,8),
            transactionId:this.packet.slice(8, 20)
        };
        if(header.zeroes !== CONSTANTS.zeroes){
            throw new Error(400, "Incorrect header zeroes");
        }
        if(header.magicCookie !== CONSTANTS.magicCookie){
            throw new Error(400, "Incorrect magic cookie");
        }
        if(header.length <= 0){
            throw new Error(400, "Message empty");
        }
        if(!Object.values(EBindingMethods).includes(header.type)){
            throw new Error(405, "Method not found");
        }
        this.header = header; 
    }
}
