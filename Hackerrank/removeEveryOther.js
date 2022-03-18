const removeEveryOther = (str) => {
  return str
    .split("")
    .filter((el, i) => {
      if (i % 2 !== 1) {
        return el;
      }
    })
    .join("");
};
// console.log(removeEveryOther('ef'))

// given a string of digits and an interger,
// if the interger has more digits, add it to the integer
// if the string is longer, ad the interger to the string
// '123', 34 => '1234'
// '364', 6334 => 6698
// "", 45 => 45
// '645', 0 => ""

function stringOrInteger(str, num) {
  if (str.length > String(num).length) {
    return str + num;
  } else {
    return Number(str) + num;
  }
}
console.log(stringOrInteger("123", 45));
// can the string be empty
// can the string they be in the wrong postion?
// can they be the same length, what happens then?
// check if the length of the str is bigger than the length of the num
// if it is then add them and return the sum
// else if it is smaller
// turn the str into a number and add it to the integer and return
