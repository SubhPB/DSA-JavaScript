var mergeAlternately = function(word1, word2) {
    
    let w1Count = 0, w2Count = 0;
    let i = 0;
    let ans = '';

    while ( i < word1.length + word2.length ){
        let iIsEven = !! (i % 2 === 0);

        if (w1Count === word1.length){
            (w2Count < word2.length) ? (ans += word2.slice(w2Count)) : ans += "";
            break;
        } else if (w2Count === word2.length){
            (w1Count < word1.length) ? (ans += word1.slice(w1Count)) : ans += "";
            break;
        };


        if (iIsEven && w1Count < word1.length){
            ans += word1[w1Count];
            w1Count ++;
        };

        if (!iIsEven && w2Count < word2.length){
            ans += word2[w2Count];
            w2Count ++;
        }

        i++;
    }

    return ans;
    
};

const word1 = "abc", word2 = "pqr";

console.log(mergeAlternately(word1,word2));