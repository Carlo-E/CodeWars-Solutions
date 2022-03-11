// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

// function diagonalDifference(arr) {
//   let sumRight = 0;
//   let sumLeft = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = i; j < arr.length; j++){
//         sumRight+= arr[i][j]
//         break;
//     }
//   }
//   let reverse = [];
//   arr.map(el => reverse.push(el.reverse()));
//   console.log(reverse)
//   for(let i = 0; i < reverse.length; i++){
//     for(let j = i; j < reverse.length; j++){
//         console.log(reverse[i][j])
//         sumLeft+= reverse[i][j]
//         break;
//     }
//   }
//   return Math.abs(sumRight - sumLeft);
// }

const diagonalDifference = (arr) => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    left += arr[i][i];
    right += arr[i][arr.length - 1 - i];
  }
  return Math.abs(left - right);
};
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
