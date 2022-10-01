import {Hammer} from 'esm1/lib-esm/Hammer.js';
import { BoxObject } from 'esm1/lib-esm/BoxObject.js';
import {Box} from 'esm1/lib-esm/Box-node.js';

export class Interop {

    constructor() {

    }

    doSomethingWithEsm1() {
        console.log("Into doSomethingWithEsm5");
        
        const p = new Hammer("blue");
        console.log(p);
        
        const box = new Box("studio");
        box.addObject(p);
        console.log(box);
        box.getFile("http://skies.esac.esa.int/Herschel/PACS-color/properties").then( (data) => console.log(data));
        
        
    }
}

const ip = new Interop();
ip.doSomethingWithEsm1();