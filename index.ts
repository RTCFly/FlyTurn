import 'reflect-metadata';

import { Symbols } from './symbols'
import { container } from './container';

const stunServices = [];
//const service = container.get<IUserService>(Symbols.IStunServer);


if (require.main === module) {
    process.argv.forEach(function (val, index, array) {
      
    });
} else {
    console.log('required as a module');
}