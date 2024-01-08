/* -- Byimaan -- */

export function matrixError(type='UnExcepted Error',msg="Got an error while executing.",header='Matrix Error'){
    throw new Error(`${header}: ${type}, ${msg}`)
};

export function verifier(expectedType,value){
    switch (expectedType) {
        case 'integer': return Number.isInteger(value);
        case 'array': return Array.isArray(value);
        case 'float': return value % 1 !== 0;
        default: return typeof value === expectedType;
    };
};

export function check(expectedType,...values){
    try {
        return values.every(val => verifier(expectedType, val));
    } catch (unknownErr){
        matrixError('Invalid Input', 'Got Invalid inputs for comparing their types', 'Input Error');
    }
};
