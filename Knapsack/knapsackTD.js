/* -- Byimaan --

Input: N = 3, W = 4, profit[] = {1, 2, 3}, weight[] = {4, 5, 1}
Output: 3
Explanation: There are two items which have weight less than or equal to 4. If we select the item with weight 4, the possible profit is 1. And if we select the item with weight 1, the possible profit is 3. So the maximum possible profit is 3. Note that we cannot put both the items with weight 4 and 1 together as the capacity of the bag is 4.

Input: N = 3, W = 3, profit[] = {1, 2, 3}, weight[] = {4, 5, 6}
Output: 0
                    <-- maxWeight -->
                      0  1  2  3  4

   if len is 0 ->    [0, 0, 0, 0, 0 ]
   first elem  ->    [ 0, 0, 0, 0, 1 ]
   sec elem    ->    [ 0, 0, 0, 0, 1 ]
   third elem  ->    [ 0, 3, 3, 3, 3 ]

*/

function knapsackTD(noOfItems,maxWeight,profit,weight){

    if (noOfItems <= 0 || maxWeight <= 0 ) return 0;

    // Basically, row index represents each element of array and column index refers to the maxWeight at specific matrix length...
    // if length of array is zero then profit will be zero that's why row 1 is initialized to zero...
    // if maxWeight is zero means storing capacity of bag is zero then profit will also be zero that's why column 1 is also initialized to zero...
    // rest of the entries of matrix are set to undefined which we will find out with nested loop.
    const matrix = Array.from( {length: noOfItems + 1}, ( _ , index ) => index === 0 ? Array(maxWeight + 1).fill(0): [0,...Array(maxWeight).fill()]);

    const printMatrix = () => {
        for(var row of matrix){ console.log(row); };
    };

    for(let m = 1; m <= noOfItems; m++){
        for(let n = 1; n <= maxWeight; n++){
            
            if (weight[m-1] <= n){
                // if the weight of the element is less or equal to maxWeight means to n...
                // It's obvious that we can include it. It only make sense to include it if it will help to get the max profit at the end...
                // if it will not help to get the max profit we will prefer to exclude it...

                // that's why we have two choices either to include it or not...
                // profit[m-1] + matrix[m-1][n - weight[m-1]] means we included it and matrix[m-1][n] means we are not going to include it...
                matrix[m][n] = Math.max( profit[m-1] + matrix[m-1][n - weight[m-1]], matrix[m-1][n] )
            } else {
                //So, now if the weight[m-1] exceeding the maxWeight. there is no chance to include it...
                matrix[m][n] = matrix[m-1][n]
            }

        };
    };

    printMatrix();

    return matrix[noOfItems][maxWeight]
};

if (require .main === module){
    let N = 3,W =4, profit = [1,2,3], weight = [4,5,1];

    console.log(knapsackTD(N,W,profit,weight));
};