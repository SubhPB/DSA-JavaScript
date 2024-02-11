/* -- Byimaan --

    Input: s = "barfoothefoobarman", words = ["foo","bar"]
    Output: [0,9]

    Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
    Output: [6,9,12]
    Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
    The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
    The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
    The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.

    Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
    Output: [6,9,12]
    Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
    The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
    The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
    The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.

*/


function concatSubStr(str,words){

    const _ansLen = words.reduce( ( acc, val ) => acc + val.length, 0)
    let answers = [];

    function isAnAnswer(s){

        for(let word of words){
            if (!s.includes(word)) return false;
        };

        let accState = {bool: true, index: 0, string: s}

        return words.reduce( (acc,val) => {
            if (acc?.bool === false || acc === false) return false;


            function nextStr(){

                if (acc?.string?.includes(val)){
                    let index = acc?.string?.indexOf(val);

                    return acc?.string?.substring(0,index) + acc?.string?.substring(index + val.length)
                }
            }

            return {bool: acc.string.includes(val), string: nextStr() ?? false };

        }, accState);
    }

    for (var i = 0; i <= str.length - _ansLen; i++){
        const isItAnswer = isAnAnswer(str.substring(i,i+_ansLen));
        if (isItAnswer?.bool === true){
            answers.push(i);
        };
    }

    return answers;
    
}

if (require.main === module){
    // const s = "barfoofoobarthefoobarman", words = ["bar","foo","the"];
    const s = "barfoothefoobarman", words = ["foo","bar"];

   // const s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
    console.log(concatSubStr(s,words))
}