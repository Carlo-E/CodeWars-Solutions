// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the
// output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as
// Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let arr = str.replace(/[^a-zA-Z0-9]/gi, " ").split("");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === " ") {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.filter((el) => el != " ").join("");
}
console.log(toCamelCase("the_stealth_warrior"));
