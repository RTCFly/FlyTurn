import  net  from 'net';
import dgram from 'dgram';

import { Container } from 'inversify';

import { Symbols } from './symbols';
import { TCPStunService } from './TCPStunService';
import { UDPStunService } from './UDPStunService';

const udpContainer = new Container();
udpContainer.bind<IStunService>(Symbols.IStunService).to(UDPStunService);
udpContainer.bind<any>(Symbols.IServer).to(dgram);

const tcpContainer = new Container(); 
tcpContainer.bind<IStunService>(Symbols.IStunService).to(TCPStunService);
tcpContainer.bind<any>(Symbols.IServer).to(net);
export { udpContainer, tcpContainer }