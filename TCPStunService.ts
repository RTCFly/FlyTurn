import { inject, injectable } from 'inversify';

import { Symbols } from './symbols';

@injectable()
class TCPStunService implements IStunService{
    @inject(Symbols.IServer) private server: any
    constructor() {
        
    }
}

export { TCPStunService };