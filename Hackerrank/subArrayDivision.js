// https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?h_r=internal-search

function birthday(s, d, m) {
  // Write your code here
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let currSum = s.slice(i, i + m).reduce((a, b) => a + b);
    if (currSum == d) {
      count += 1;
    }
  }

  return count;
}
console.log(birthday([2, 2, 1, 4, 2], 4, 2));

// if add el to the next el = birth day push it to an array

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
