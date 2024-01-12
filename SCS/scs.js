/* -- Byimaan -- 

--- JS verision of SCS ---

'''
Given two strings X and Y, print the shortest string that has both X and Y as subsequences. If multiple shortest supersequence exists, print any one of them.

Examples:

Input: X = "AGGTAB",  Y = "GXTXAYB"
Output: "AGXGTXAYB" OR "AGGXTXAYB" 
'''

*/
const LcsByTopDown = require('../LCS/lngestCmnSubSeq');

function SCS(str1,str2){

    // this question is a variation of the LCS which we already solved,
    // the matrix of the LCS solution will be very helpful to track the chars
    // of required string...

    var m = str1.length, n = str2.length;

    if (m === 0 || n === 0){ return str1 + str2 };

    const getMatrix = true;

    const matrix = LcsByTopDown(str1,str2,getMatrix);

    var scs = '';

    // we will start tracking the matrix from the corner of right-bottom most entry means matrix[m][n]
    while ( m > 0 && n > 0 ){
        // this loop will run until we do not reach the first column or first row of the matrix...

        if (str1[m-1] === str2[n-1]){
            scs += str1[m-1]
            m --;
            n--;
        } else {
            // this means both chars are different...
            // now, we can move to matrix[m-1][n] or to the martrix[m][n-1]...
            // It will decided by which entry has greater value...

            if (matrix[m-1][n] > matrix[m][n-1]){
                // when we decrement m then we will add str1[m-1] else str2[n-1]
                scs += str1[m-1];
                m --;
            } else {
                scs += str2[n-1]
                n--;
            }
        }
    };

    // here we are sure that either m or n is 0. Or both are zero...
    // if both are zero, we got our answer but in reverse form that we will fix soon...

    if (m !== 0){
        while ( m !== 0 ){
            // here, we are decrementing m so, will add the chars of str1...
            scs += str1[m-1]
            m--;
        }
    } else if (n !== 0){
        while( n !== 0 ){
            scs += str2[n-1];
            n--;
        };
    };

    // here, this is time to reverse the scs for answer...
    return scs.split("").reverse().join('');

};

module.exports = SCS;

if (require.main === module){

    const X = "AGGTAB";
    const Y = "GXTXAYB";

    console.log(SCS(X,Y));
};
