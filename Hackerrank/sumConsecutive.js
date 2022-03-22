// what is the max sum from the consecutive number of elements

const maxConSum = (arr, num) => {
    let maxSum = -Infinity
    for(let i = 0; i < arr.length - num + 1; i++){
        // 6 - 3 + 1 = 4
        let currSum = arr.slice(i, num + i).reduce((a,b) => a + b);
        console.log(currSum)
        if(currSum > maxSum) {
            maxSum = currSum
        }
    }
    // return maxSum
    // 0, 3 => 4, 5, 1 = 10
    // 1, 4 => 5, 1, 3 = 9
    // 2, 5 => 1, 3, 2 = 6
    // 3, 6 => 3, 2, 5 = 10
    // 4, 

}
console.log(maxConSum([4, 5, 1, 3, 2, 5], 3))

