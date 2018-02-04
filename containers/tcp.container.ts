import  net  from 'net';

import { Container } from 'inversify';

import { Symbols } from '../symbols';
import { TCPStunService } from '../services';


const tcpContainer = new Container(); 
tcpContainer.bind<IStunService>(Symbols.IStunService).to(TCPStunService);
tcpContainer.bind<any>(Symbols.IServer).to(net);
export default tcpContainer;