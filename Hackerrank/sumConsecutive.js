// what is the max sum from the consecutive number of elements

const maxInArray = (arr, num = 1) => {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let currSum = arr.slice(i, num + i).reduce((a, b) => a + b);
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
};
// console.log(maxConSum([4, 5, 1, 3, 2, 5], 1))



function maxNConsecutiveElementsInMatrix(matrix, num) {
    // max el in the matrix
  let maxElement = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    let currSum = maxInArray(matr);
  }
}
console.log(maxNConsecutiveElementsInMatrix());
