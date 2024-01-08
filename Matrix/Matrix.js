/* -- Byimaan -- */

import { verifier, check } from "./Tools";

class Matrix{

    constructor (m,n){

        // if (check('integer',m) && check('integer',n))

        this.m = m;
        this.n = n;
        this.matrix = Array.from( { length: this.m }, () => Array(this.n).fill())
    };

};



export default Matrix;