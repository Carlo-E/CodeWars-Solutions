// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  let sumRight = 0;
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    sumRight = arr[0][0] + arr[1][1] + arr[2][2];
    sumLeft = arr[0][2] + arr[1][1] + arr[2][0];
  }
  return Math.abs(sumRight - sumLeft);
}
console.log(
  diagonalDifference([
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [9, 8, 9, 1],
  ])
);
