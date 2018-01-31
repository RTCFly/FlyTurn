import { inject, injectable } from 'inversify';

import { Symbols } from './symbols';
class TCPStunService {
    
    private server : IStunServer;
    
    constructor(@inject(Symbols.IStunServer) private stunServer: IStunServer) { 
        this.server = stunServer;
    }
}

export { TCPStunService };