// https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true

function simpleArraySum(arr) {
    // Write your code here

    return arr.reduce((a,b) => a + b)

}
console.log(simpleArraySum([1,2,3]))