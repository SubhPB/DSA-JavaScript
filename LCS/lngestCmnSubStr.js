/* -- Byimaan -- 

 Write a function that finds the longest common substring
 between two given strings.

 str1: "historical"
 str2: "hysterical"

 answer = rical

*/

function longestCommonSubString(str1,str2,get_length= false,get_matrix=false){

    const m = str1.length;
    const n = str2.length;

    // if zero length. then, lng cmn substring will be zero...
    if (m == 0 || n == 0){ return 0; };

    const matrix = Array.from( { length: m+1 }, () => Array(n+1).fill());

    var longestLength = 0;
    // "at" stores the entry of matrix who holds the longestLength in array format...
    // will be useful to find the string...
    var at;

    // --> r will deal with str1
    for(var r=0; r<m+1; r++){
        // --> c will deal with str2
        for(var c=0; c<n+1; c++){
            if ( r === 0 || c === 0){
                // all entries of first row and column will be initialized to zero beacuse if any of the length of string
                // is zero then result will also be zero;
                matrix[r][c] = 0;
            } else {
                if (str1[r-1] === str2[c-1]){
                    // here we found the match...

                    matrix[r][c] = 1 + matrix[r-1][c-1];

                    if (matrix[r][c] > longestLength ){
                        longestLength = matrix[r][c];
                        at = [r,c]
                    };

                } else {
                    // in the case, if both chars are different.
                    // will assign zero because our consistency got break for sub-string...
                    matrix[r][c] = 0;
                };
            };
        };
    };

    if (get_length){ return longestLength };

    if (get_matrix) { return matrix };

    // Now let's code the logic to print or return the string...
    // one thing we know is the length at this time which is stored in the longestLength...
    // we will use the matrix's entry who stores the longest length to findout the string...


    // i'm giving the substring from str1. if you want from str2 it will be str2.slice(at[1]-longestLength,at[1]+1)...
    // however, both will give the same answer...

    if (longestLength === 1){
        return str1[at[0] - longestLength];
    };

    return at ? str1.slice(at[0]-longestLength,at[0]+1) : " "
 
};

module.exports = longestCommonSubString;

if (require.main === module){
    
    const str1 = "historical";
    const str2 = "hysterical";


    console.log(longestCommonSubString(str1,str2));
}