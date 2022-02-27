// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by  unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return .

// Example

// The character can jump  unit high initially and must take  doses of potion to be able to jump all of the hurdles.

// Function Description

// Complete the hurdleRace function in the editor below.

// hurdleRace has the following parameter(s):

// int k: the height the character can jump naturally
// int height[n]: the heights of each hurdle
// Returns

// int: the minimum number of doses required, always  or more

function hurdleRace(k, height) {
  // Write your code here
  if (Math.max(...height) > k) {
    return Math.max(...height) - k;
  }
  return 0;
}
console.log(hurdleRace(3, [1, 2, 3, 3, 2]));
