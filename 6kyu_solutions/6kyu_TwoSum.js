// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

const cards = [10, 3, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];
// 3, 10
// temp = 10
// 10 = 3
// 3 = 10

const bubbleSort = (arr) => {
  let unsorted = true;
  while (unsorted) {
      unsorted = false 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        //   let temp = arr[i];
        //   arr[i] = arr[i + 1];
        //   arr[i + 1] = temp;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        unsorted = true
      }
    }
  }
  return arr;
};
console.log(bubbleSort(cards));
