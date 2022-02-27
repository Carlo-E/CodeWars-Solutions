// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"
// Example

// This password is 5 characters long and is missing an uppercase and a special character.
// The minimum number of characters to add is. This password is 5 characters long and has
// at least one of each character type.
// The minimum number of characters to add is .

// Function Description

// Complete the minimumNumber function in the editor below.

// minimumNumber has the following parameters:

// int n: the length of the password
// string password: the password to test
// Returns

// int: the minimum number of characters to add
// Input Format

// The first line contains an integer , the length of the password.

// The second line contains the password string. Each character is either a
// lowercase/uppercase English alphabet, a digit, or a special character.

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let count = 0;
  if(!/[a-z]/.test(password)) count++;
  if(!/[A-Z]/.test(password)) count++;
  if(!/[0-9]/.test(password)) count++;
  if(!/[-!@#$%^&*()+]/.test(password)) count++;

  return Math.max(count, 6 - password.length)
}
console.log(minimumNumber(3, "Ab1"));
