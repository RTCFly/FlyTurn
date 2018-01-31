import { Container } from 'inversify';

import { Symbols } from './symbols';
import { TCPStunService } from './TCPStunService';
import { UDPStunService } from './UDPStunService';

const container = new Container();
container.bind<IStunServer>(Symbols.IStunServer).to(TCPStunService);
container.bind<IStunServer>(Symbols.IStunServer).to(UDPStunService);

export { container }