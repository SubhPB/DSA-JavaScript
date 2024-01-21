/* -- Byimaan -- 

Given a set of non-negative integers and a value sum,
the task is to check if there is a subset of the given set whose sum is equal to the given sum. 

Examples: 

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output: True
Explanation: There is a subset (4, 5) with sum 9.

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
Output: False
Explanation: There is no subset that add up to 30.

*/

function subsetSum(arr,sum){

    const matrix = Array.from( {length: arr.length + 1}, (_, index) => index === 0 ? new Array(true,...Array(sum).fill(false)): new Array(true,...Array(sum).fill()));

    const printMatrix = () => {
        for(let row of matrix){
            console.log(row);
        };
    };


    for(let i = 1; i <= arr.length; i++){
        for (let j = 1; j <= sum; j ++){

            if (arr[i-1] <= j){
                matrix[i][j] = matrix[i-1][j - arr[i-1]] || matrix[i-1][j]
            } else {
                matrix[i][j] = matrix[i-1][j]
            }
        }
    };


    printMatrix();
    return matrix[arr.length][sum]
};


// -- another variation of the problem...

function totalSumSubsets(arr,sum){
    // this return the total number of ways to get the target sum...
    const arrL = arr.length;

    const matrix = Array.from({length: arrL + 1}, () => new Array(1,...Array(sum).fill(0)));

    const printMatrix = () => {
        for(let row of matrix){ console.log(row) };
    };

    for (let m = 1; m <= arrL; m++){
        for (let n = 1; n <= sum; n++){

            if ( arr[m - 1] <= n ){
                matrix[m][n] =  matrix[m-1][n-arr[m-1]] + matrix[m-1][n] 
            } else {
                matrix[m][n] = matrix[m-1][n];
            }
        }
    }

    printMatrix()

    return matrix[arrL][sum]
}

if (require .main === module){

    const arr = new Array(3, 34, 4, 12, 5, 2);
    console.log(totalSumSubsets(arr,5));

};