import { inject, injectable } from 'inversify';

import { Symbols } from './symbols';
@injectable()
class UDPStunService implements IStunService {
    @inject(Symbols.IServer) private server: any


    
}

export { UDPStunService };