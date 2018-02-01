import { inject, injectable } from 'inversify';

import { Symbols } from './symbols';

@injectable()
class TCPStunService implements IStunService{
    
    constructor() {
    }
}

export { TCPStunService };