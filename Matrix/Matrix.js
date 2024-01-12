/* -- Byimaan -- */

const { matrixTools } = require('./Tools.js');

class Matrix{

    constructor (m,n){
        matrixTools.isValidMatrix(m,n)
        this.m = m;
        this.n = n;
        this.matrix = Array.from( { length: this.m }, () => Array(this.n).fill());
    };

    indexErr(){
        var type='Index Error', msg='Given index is not valid.'
        matrixTools.matrixError(type,msg)
    };

    print(){
        for(let row of this.matrix){ console.log(row); }
    };

    getRow(rowIndex){
        matrixTools.rowExists(rowIndex,this.m,throwError=true)
        return this.matrix[rowIndex];
    };

    getCol(colIndex){
        matrixTools.colExists(colIndex,this.n,throwError=true);
        return Array.from( this.matrix, (row) => row[colIndex] )
    };

    getEntry(arr){
        if (!matrixTools.verifier('array',arr)){
            arr = [...arr]
        };
        matrixTools.entryExists(rowInd=arr[0],colInd=arr[1],this.m,this.n,throwError=true);
        return this.matrix[arr[0]][arr[1]];
    };

    setEntry(val,arr){
        if (!matrixTools.verifier('array',arr)){
            arr = [...arr]
        };
        if (matrixTools.entryExists(rowInd=arr[0],colInd=arr[1],this.m,this.n)){
            this.matrix[rowIndex][colIndex] = val;
        };
    };

};

module.exports = Matrix;

if (require.main === module){
    //  can perform tests here...
    const matrix = new Matrix(2,2);

    console.log(matrix.print())

};