declare interface IRInfo {
    address:string; 
    family:string; 
    port:number;
}

declare interface IStunHeader {
    zeroes:any; 
    type:string; 
    length:number;
    magicCookie:string; 
    transactionId:string; 
    error:Error;
}

