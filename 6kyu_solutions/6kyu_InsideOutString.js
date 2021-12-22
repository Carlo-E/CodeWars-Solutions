// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the
// internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word
// where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x) {
  let arr = x.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      if (arr[i].length % 2 === 0) {
        result.push(reverseEven(arr[i]));
      } else {
        result.push(reverseOdd(arr[i]));
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
}

function reverseEven(str) {
  let result = [];
  let front = [];
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    front.push(str[i]);
  }
  result.push(front.reverse().join(""));

  let back = [];
  let rev = str.split("").reverse();
  for (let i = 0; i < Math.floor(rev.length / 2); i++) {
    back.push(rev[i]);
  }
  result.push(back.join(""));

  return result.join("");
}

function reverseOdd(str) {
  let front = [];
  let result = [];
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    front.push(str[i]);
  }
  result.push(front.reverse().join(""));

  let mid = "";
  let middle = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i++) {
    if (i === middle) {
      mid = str[i];
    }
  }
  result.push(mid);

  let back = [];
  let rev = str.split("").reverse("").join("");
  for (let i = 0; i < Math.floor(rev.length / 2); i++) {
    back.push(rev[i]);
  }
  result.push(back.join(""));
  return result.join("");
}
