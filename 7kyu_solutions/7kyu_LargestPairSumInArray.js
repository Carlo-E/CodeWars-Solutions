// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  let first, second;
  if (numbers[0] > numbers[1]) {
    first = numbers[0];
    second = numbers[1];
  } else {
    first = [numbers[1]];
    second = numbers[0];
  }

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] > first) {
      second = first;
      first = numbers[i];
    } else if (numbers[i] > second && numbers[i] != first) {
      second = numbers[i];
    }
  }

  return Number(first) + Number(second);
}

function largestPairSum(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] + numbers[1];
}
