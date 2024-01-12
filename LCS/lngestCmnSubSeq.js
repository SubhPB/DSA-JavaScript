/* -- Byimaan -- 

# our goal is is to get the longest common subsequence from the two strings...

*/



const LcsByTopDown = (str1,str2,getMatrix=false) => {

    var [l1, l2] = [str1.length, str2.length];

    const matrix = function(){
        // one row's length will be equal to the str2.length + 1
        // we needs l1 + 1 no of rows
        const matrice = Array(l1 + 1).fill(Array(l2+1));

        return matrice
    }();

    const max = (v1,v2) =>  v1 >= v2 ? v1 : v2;

    for(var m=0; m <= l1; m ++){
        for( var n=0; n <= l2; n++ ){

            if ( m === 0 || n === 0) { 
                matrix[m][n] = 0;
                continue;
            }

            if (str1[m-1] === str2[n-1]){
                matrix[m][n] = 1 + matrix[m-1][n-1];
            } else {
                matrix[m][n] = max(matrix[m][n-1],matrix[m-1][n])
            }
        };
    };

    return getMatrix ? matrix : matrix[l1][l2]
};     

if (require.main === module) {

    const str1 = "abcdgh";
    const str2 = "abedfha";
    console.log(LcsByTopDown(str1,str2));

};

module.exports = LcsByTopDown;