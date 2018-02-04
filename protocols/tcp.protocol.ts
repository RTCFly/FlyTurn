import { Symbols } from '../symbols';

export default class Tcp implements IProtocolProxy {
    private _server : any; 
    private _serverInstance: any; 
    constructor(
	    @inject(Symbols.IServer) server: any){
        this._server = server;
        this._serverInstance = this._server.createServer(socket => socket.on('data', data => this.onMessage(data)));
        //Could add a log here
        this._serverInstance.listen(1234);
    }
    private onMessage(data:any){
        
    }
}