/* -- Byimaan -- 


Leetcode Problem,
    Given two strings s and t of lengths m and n respectively, return the minimum window 
    substring
    of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

    The testcases will be generated such that the answer is unique.

    Example 1:

    Input: s = "ADOBECODEBANC", t = "ABC"
    Output: "BANC"
    Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

    Example 2:

    Input: s = "a", t = "a"
    Output: "a"
    Explanation: The entire string s is the minimum window.

    Example 3:

    Input: s = "a", t = "aa"
    Output: ""
    Explanation: Both 'a's from t must be included in the window.
    Since the largest window of s only has one 'a', return empty string.
 
*/

function minWindowSubStr(s,t){

    var sLen = s.length; tLen = t.length;

    if (tLen === 0 || sLen === 0){ return "" };

    const sArray = s.split(''), tArray = t.split('')

    // this function will return a map means object (dictionary) where keys will be chars of t...
    // and values will hold the number of occurance of that char in that string...
    // for example if t = "ABCA" --> map = { A:2, B:1, C:1 }...

    function constructMap(){
        return tArray.reduce( (acc,char) => {
            acc[char] = (acc[char] || 0 ) + 1;
            return acc
        }, {})
    }

    const _map = constructMap();

    // counter maintains the record that how many more strings do we need to reach the result...
    // initially, we need to find a string which have length of atleast same as length of t...
    // if counter becomes zero then it means that we found a possible answer...
    // but not sure that this is the shortest one...

    var counter = t.length;

    // i and j work as a pointer which keeps track of string as a sub window. 
    // it will run over the string 's'
    var i= 0, j=0;

    // j will go forward until counter does not get to zero means until we do not get a answer
    // and does not matter is it is the longest or shortest...
    // once counter hit the zero then we will move i forward to make the windiow shortest as much possible...

    var _ans = s; // <-- this will be returned as final answer at the end...

    while ( i < sLen && j < sLen ){
        
        if (tArray.includes(s[j])){
            // if it include then decrement the val of map[s[j]]. 
            _map[s[j]] -= 1 ;

            if (_map[s[j]] === 0){
                // it is zero, we have to decrement the count that will mean that we got close to an answer with one step...
                counter -= 1;
                
                // also, this is right time to reduce the size of window by deleting unneccessary or extra chars... 
                // moving i to reduce window size...
                if (counter === 0){
                    moveI(); // <-- this will update the i...
                };
            };
            // let's jump to another char and extend the size of window...
        };
        j++;
    };


    function moveI(){
        
        while (i < j){
            if (!tArray.includes(s[i])){
                // we have clear way to exclude it...
                i ++;
            } else {
                // this measn it includes that specific char...
                // we can only delete it if it is extra one ...
                // suppose map[a[i]] === -2 this means we two extra chars, which can be deleted... 
                // if it is zero that means we can't delete it and this time to resume the movement of j...

                if (_map[s[i]] === 0){
                    // here we had filtered a string which is a candidate of our answer...
                    const candidateAns = s.slice(i,j+1);

                    if (candidateAns.length < _ans.length){
                        _ans = candidateAns;
                    };

                    // here we will exclude the first char of _ans to find the next possible answer...
                    // and will update the counter and _map[s[i]] accordingly...
                    // by the way it took 2 hours to find the bug that got solved by these two lines below...
                    _map[s[i]] += 1;
                    counter += 1;
                    i += 1;
                    break;
                };

                if (_map[s[i]] < 0){
                    _map[s[i]] ++;
                    i ++;
                };
            };

        };
    }

    return _ans === s ? "" : _ans;

};


if (require.main === module){

    const s = "ADOBECODEBANC", t = "ABC";

    function p(val){ console.log(val) };

    p(minWindowSubStr(s,t));

};

module.exports = minWindowSubStr;


