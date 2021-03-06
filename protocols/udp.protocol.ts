import { Symbols } from '../symbols';
import { EventEmitter } from 'event';
import { StunMessage } from '../entities';

export default class Udp extends EventEmitter implements IProtocolProxy {
    private _server : any; 
    private _serverInstance: any; 
    constructor(
	    @inject(Symbols.IServer) server: any){
        this._server = server;
        this._serverInstance = this._server.createSocket('udp4');
        this._serverInstance.on('message', (msg, rinfo) => this.onMessage(msg, rinfo));
        this._serverInstance.bind(this.options.port); 
    }
    private onMessage(data:Buffer, rinfo:IRInfo){
        try{
            var message = new StunMessage(data);
        } catch(err){
           console.log("could not parse packet", err);
        }
        this.emit('message',data, rinfo);
    }
}
