// what is the max sum from the consecutive number of elements
let matrix1 = [
  [3, 6, 8],
  [2, 0, 9],
  [3, 6, 1],
];

let matrix2 = [
  [0, -4, 17],
  [2, 0, 0],
  [3, 7, 23],
];

let matrix3 = [
  [3, 6, 8],
  [2, 0, 9],
  [3, 6, 1],
];

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
function maxInMatrix(matrix) {
  let maxElement = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    let currMax = maxInArray(matrix[i]);
    if (currMax > maxElement) {
      maxElement = currMax;
    }
  }
  return maxElement;
}
// console.log(maxInMatrix(matrix1));

function maxNConsecutiveElementsInMatrix(matrix, num) {
  // max el in the matrix
  let maxElement = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    let currMax = maxInArray(matrix[i], num);
    if (currMax > maxElement) {
      maxElement = currMax;
    }
  }
  return maxElement;
}
// console.log(maxNConsecutiveElementsInMatrix(matrix2, 2));

function maxStacked(matrix, stackSize = 2) {
  let maxStack = -Infinity;

  for (let i = 0; i <= matrix.length - stackSize; i++) {
    //  console.log(matrix.length - stackSize)
    for (let j = 0; j < matrix[i].length; j++) {
      // console.log(matrix[i])
      let columnArr = [];
      for (let m = 0; m < stackSize; m++) {
        // console.log(matrix[i + m][j])
        columnArr.push(matrix[i + m][j]);
      }
      let currMax = columnArr.reduce((a, b) => a + b);
      if (currMax > maxStack) maxStack = currMax;
    }
  }
  return maxStack;
}
// console.log(maxStacked(matrix3))

//   [3, 6, 8],
//   [2, 0, 9],
//   [3, 6, 1],

const maxTwoDiagonalValues = (matrix) => {
  let maxSum = -Infinity;

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let currMax;
// console.log(matrix[i], 'mi')
// console.log(i, j)
// matrix[0][1] = 6
// matrix[1][2] = 9
// matrix[2][3] = 

if (j == 0) {
  // console.log(matrix[i + j])
  // console.log(matrix[i][j])
  // console.log(matrix[i + j][j + 1]) 
  currMax = matrix[i][j] + matrix[i + j][j + 1];
        // matrix[0 + 0][0 + 1] = 
        // console.log(matrix[i][j] + matrix[i + j][j + 1]) 
      }

      if (j > 0 && j < matrix[i].length - 1) {
        let maxDiagonal = Math.max(matrix[i + 1][j - 1], matrix[i + 1][j + 1]);
        // matrix[1 + 1][1 - 1], matrix[1 +  1][1 + 1]
        // matrix[2][0], matrix[2][2]
        // 3, 1 
        // 3
        console.log(maxDiagonal, "max", j)
        currMax = matrix[i][j] + maxDiagonal;
      }

      if (j == matrix[i].length - 1) {
        currMax = matrix[i][j] + matrix[i + 1][j - 1];
      }

      if (currMax > maxSum) maxSum = currMax;
    }
  }
  return maxSum;
};
// console.log(maxTwoDiagonalValues(matrix1))

//   [3, 6, 8],
//   [2, 0, 9],
//   [3, 6, 1],

// write a function solution that, given an interger N retutns the ,maximum possible value obtainable 
// by deleting on '5' 

// given N = 15958 return 1958
// given N = -5000 return 0

function solution (N) {
//   let reverse = N.toString().split("").reverse("")
//   N = N.toString().split("")
//   let index = N.indexOf("5")
//   let val2 =  reverse.filter((el, i) => i !== index).reverse()
//   let val1 =  N.filter((el, i) => i !== index)
// console.log(val2)
//   console.log(val1)

  N = N.toString().split("")
let indexes = []
  for(let i = 0; i < N.length; i++){
    if((N[i] === '5')) {
      indexes.push(i)
    }
  }

  

  console.log(indexes)


}
console.log(solution(15958))