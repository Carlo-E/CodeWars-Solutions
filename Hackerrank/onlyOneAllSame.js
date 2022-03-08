// given a matrix with three subarrays, check if one and only one of the
// subarrays has all the same values
const elementEqual = (arr) => {
  let firstEl = arr[0];
  return arr.every((el) => el === firstEl);
};

const onlyOneAllSame = (matrix) => {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (elementEqual(matrix[i]) === true) {
      count++;
    }
  }
  return count == 1 ? true : false;
};
console.log(
  onlyOneAllSame([
    [1, 8, 1],
    [1, 1, 1],
    [5, 1, 1],
  ])
);
