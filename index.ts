import 'reflect-metadata';

import { Symbols } from './symbols'
import { tcpContainer, udpContainer } from './container';

const stunServices :Array<IStunServer> = [];


let i = 0; 
let foundUdp = true
console.log("go")
process.argv.forEach(function (val, index, array) {
    console.log("args", val);
    if(val === "--tcp"){
        stunServices.push(tcpContainer.get<IStunServer>(Symbols.IStunServer));
    }
    if(val === "--no-udp"){
        foundUdp = false; 
    }
    if(i === index && foundUdp){
        stunServices.push(udpContainer.get<IStunServer>(Symbols.IStunServer));
    }else{
        i++
    }
      
});
