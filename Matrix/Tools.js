/* -- Byimaan -- */

function matrixError(type='UnExcepted Error',msg="Got an error while executing.",header='Matrix Error'){
    throw new Error(`${header}: ${type}, ${msg}`)
};

function verifier(expectedType,value){
    switch (expectedType) {
        case 'integer': return Number.isInteger(value);
        case 'array': return Array.isArray(value);
        case 'float': return value % 1 !== 0;
        default: return typeof value === expectedType;
    };
};

function check(expectedType,...values){
    try {
        return values.every(val => verifier(expectedType, val));
    } catch (unknownErr){
        matrixError('Invalid Input', 'Got Invalid inputs for comparing their types', 'Input Error');
    }
};

function isValidMatrix(m,n){
    if (m == null || n == null){
        matrixError('Dimension Error','The dimensions for matrix were not provided for initialization. Please pass the values for m and n in parameters.');
    } else if (!check('integer',m,n)){
        matrixError('Wrong Data Type', 'Dimension of matrix should be of integer data type.');
    } else if ( m <= 0 || n <= 0 ){
        matrixError('Invalid Input','The size of matrix should always be positive (m,n > 0)');
    };
};  

function isValidFieldIndex(index, mOrN,throwError=false){
    var type='Index Error', msg='Given index is not valid.'
    if (index < mOrN && index >= 0) {
        return true
    } else {
        if (throwError){ 
            matrixError(type,msg) 
        } else {return false};
    }
};

function entryExists(rowInd,colInd,m,n,throwError=false){
    return isValidFieldIndex(rowInd,m,throwError) && isValidFieldIndex(colInd,n,throwError);
};

const matrixTools = {
    matrixError: matrixError,
    verifier: verifier,
    isValidMatrix: isValidMatrix,
    check: check,
    rowExists: isValidFieldIndex,
    colExists: isValidFieldIndex,
    entryExists: entryExists,
}

module.exports = { matrixTools };

if (require.main === module) {
    // Equivalent to Python's `if __name__ == "__main__"`

    // testing 
    var n1 = 3, n2 = 3, n3 = 7.0;

    console.log(check('string',n1,n2,n3))

}