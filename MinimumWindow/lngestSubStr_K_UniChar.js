/* -- Byimaan --

S = "aabacbebebe", K = 3
Output: 
7
Explanation: 
"cbebebe" is the longest substring with 3 distinct characters
*/

function lngestSubStrWith_K_UniqueChars(s,k){

    const sLen = s.length, sArr = s.split('');

    if (sLen === 0 || k === 0){ return " "}

    // these will work like pointers laid upon string 's'...
    var i = 0, j = 0;

    // this will store the each char of _lngest as key and it's occurance in value...
    var map = {}

    // _lngest stores all the possible answers we can get in a array...
    // counter shows how many unique chars have we have in _lngest...
    var _lngest = [""], counter = 0;

    // i and j will points to the starting and ending index of the _lngest substr...
    while ( i < sLen && j < sLen){

        // this stores the last index of the _lngest...
        var lastIndex = _lngest.length - 1;

        if (map.hasOwnProperty(s[j])){
            _lngest[lastIndex] += s[j]
            map[s[j]] ++;
        } else {
            if (counter < k){
                _lngest[lastIndex] += s[j]
                counter ++;
                map[s[j]] = 1;
            } else {
                // means counter >= k...
                // time to move i...
                
                map = {} 
                i++;
                j = i;
                counter = 0;
                _lngest.push("");
                continue;
            }
        };

        if (s.slice(i,j+1).length > (_lngest[lastIndex]).length){
            _lngest[lastIndex] = s.slice(i,j+1)
        };
        j++;
    };

    return _lngest.reduce( (acc, val) => {
        return acc.length < val.length ? val : acc;
    },_lngest[0]);
}

if (require.main === module){
    const s = "aabacbebebe", k = 3;
    console.log(lngestSubStrWith_K_UniqueChars(s,k))
}