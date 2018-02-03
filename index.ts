import 'reflect-metadata';

import { Symbols } from './symbols'
import { tcpContainer, udpContainer } from './container';

const stunServices :Array<IStunServer> = [];


let i = 0; 
let foundUdp = true
console.log("go")
process.argv.forEach(function (val, index, array) {
    if(val === "--tcp"){
        console.log("starting tcp");
        stunServices.push(tcpContainer.get<IStunService>(Symbols.IStunService));
    }
    if(val === "--no-udp"){
        foundUdp = false; 
    }
    if(i === index && foundUdp){
        console.log("starting udp")
        stunServices.push(udpContainer.get<IStunService>(Symbols.IStunService));
    }else{
        i++
    }
      
});
