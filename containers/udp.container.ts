import dgram from 'dgram';

import { Container } from 'inversify';

import { Symbols } from '../symbols';
import { UDPStunService } from '../services';

const udpContainer = new Container();
udpContainer.bind<IStunService>(Symbols.IStunService).to(UDPStunService);
udpContainer.bind<any>(Symbols.IServer).to(dgram);
export default udpContainer;