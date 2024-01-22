/* -- Byimaan -- 

find the permutation of "abc"

*/

function stringPerm(str){

    const perms = [];

    function swap(elem,i,j){
        let temp = elem[i];
        elem[i] = elem[j];
        elem[j] = temp;
    };

    function backTrack(_str,start){
        
        if (start === _str.length - 1){
            perms.push(_str.join(''));
            return;
        };
        for(let i = start; i < _str.length; i++){
            
            swap(_str,i,start)
            backTrack(_str,start+1);

        }
    };
    
    
    backTrack([...str],0);
    return perms;
};


if (require .main === module){

    const str = "abc"
    console.log(stringPerm(str));
}