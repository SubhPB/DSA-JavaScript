/* -- Byimaan --  

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
*/

function lngestSubStr_W_RepChars(s){

    const sLen = s.length;

    if (sLen === 0) " ";

    let i = 0, j = 0, map = {};

    let maxLen = 0;
    let start = 0;
    
    while ( i < sLen && j < sLen ){
        
        if (!map.hasOwnProperty(s[j])){
            map[s[j]] = 1;
        } else {
            delete map[s[i]];
            i ++;
            continue;
        };

        if (j - i + 1 > maxLen){
            maxLen = j - i + 1;
            start = i;
        }

        j++;
    };
    return s.slice(start,start+maxLen)
};


if (require.main === module){
    const s = "abcabcbb";
    console.log(lngestSubStr_W_RepChars(s));
}

// node lngestSubStr_W_RepChars.js