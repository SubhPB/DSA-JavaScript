/* -- Byimaan --

Problem Statement:

    Given an array of non-negative integers, write a function that finds all the subsets of the array that sum up to a specific target value.

    Input:

    An array of non-negative integers, arr[].
    An integer, target_sum, representing the desired sum.
    Output:

    A list of all subsets of arr[] where the sum of elements in each subset is equal to target_sum. Each subset should be presented as a list of integers.
    Examples:

    Input: arr[] = [3, 34, 4, 12, 5, 2], target_sum = 9
    Output: [[4, 5]]
    Explanation: Only one subset [4, 5] sums up to 9.

    Input: arr[] = [1, 2, 3, 4], target_sum = 5
    Output: [[1, 4], [2, 3]]
    Explanation: There are two subsets [1, 4] and [2, 3] that sum up to 5.

*/


function findSubsets(arr,targetSum){

    let results = [];


    function backTrack(start,remaining,path){
        if ( remaining === 0){
            results.push([...path]);
            return
        };

        for(let i = start; i < arr.length; i ++){
            if (remaining - arr[i] >= 0){
                path.push(arr[i]);
                backTrack(i+1, remaining - arr[i],path);
                path.pop();
            };
        };
    };

    backTrack(0,targetSum,[]);
    return results;
};

if (require.main === module){
    const arr = [1, 2, 3, 4], target_sum = 5;

    console.log(findSubsets(arr,target_sum));
}