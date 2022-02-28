// Sorting is useful as the first step in many different tasks. The most common task is to make
// finding things easier, but there are other uses as well. In this case, it will make
// it easier to determine which pair or pairs of elements have the smallest absolute
// difference between them.

// Example

// Sorted, . Several pairs have the minimum difference of : . Return the array .

// Note
// As shown in the example, pairs may overlap.

// Given a list of unsorted integers, , find the pair of elements that have the smallest
// absolute difference between them. If there are multiple pairs, find them all.

// Function Description

// Complete the closestNumbers function in the editor below.

// closestNumbers has the following parameter(s):

// int arr[n]: an array of integers
// Returns
// - int[]: an array of integers as described

// Input Format

// The first line contains a single integer , the length of .
// The second line contains  space-separated integers, .

function closestNumbers(arr) {
  // Write your code here

  arr.sort((a, b) => a - b);
  let output = [];
  let minDis = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < minDis) {
      minDis = arr[i + 1] - arr[i];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === minDis) {
      output.push(arr[i], arr[i + 1]);
    }
  }

  return output;
}
// console.log(
//   closestNumbers([
//     -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
//     266854, 100, 150,
//   ])
// );
