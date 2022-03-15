// https://www.hackerrank.com/challenges/three-month-preparation-kit-two-characters/problem?h_r=internal-search

const removeDuplicates = (s) => {
  // Write your code here
  s = s.split("");
  // console.log(s)
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      arr.push(s[i]);
    }
  }

  return s.filter((el) => el != arr[0]);
};
function alternate(s) {
  let arr = removeDuplicates(s);
  let arr2 = [];
  // bcfbcb
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 2]) {
      arr2.push(arr[i + 2]);
      break;
    }
  }
  return arr.filter((el) => el != arr2[0]).join("");
}
console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab"));

// console.log(removeDuplicates("aabcabc"));
