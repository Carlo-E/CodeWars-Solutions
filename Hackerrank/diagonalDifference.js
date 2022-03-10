// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

function diagonalDifference(arr) {
  let sumRight = 0;
  let sumLeft = 0;
  for (let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++){
        // console.log(arr[i][j])
        sumRight+= arr[i][j]
        break;
    }
  }
  let reverse = [];
  arr.map(el => reverse.push(el.reverse()));
  console.log(reverse)
  for(let i = 0; i < reverse.length; i++){
    for(let j = i; j < reverse.length; j++){
        // console.log(reverse[i][j])
        sumLeft+= reverse[i][j]
        break;
    }
  }
//   console.log(sumRight)
//   return Math.abs(sumRight - sumLeft);
}
console.log(
  diagonalDifference([
    [1, 2, 3,],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
