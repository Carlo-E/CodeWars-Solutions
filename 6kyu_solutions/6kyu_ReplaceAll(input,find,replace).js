// Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string? Write a function, replaceAll(input, find, replace); that will replace all matches of the given find string with the given replace string.

// The function will always be called with three strings, so don't worry about validating the arguments.

// As with the original "string".replace(find, replace), if find is an empty string, it should match in-between each character, effectively inserting replace in-between each character, including the start and end of the string. I've given you some tests for this to make it a little clearer.

function replaceAll(input, find, replace) {
  if (input === "" && find === "") {
    console.log(replace);
  } else if (input.length === 1 && find === "") {
    console.log(replace + input + replace);
  } else if (find === "") {
    console.log(replace + input.split("").join(replace) + replace);
  } else console.log(input.split(find).join(replace));
}

// or

function replaceAll(input, find, rep) {
  let arr = input.split(find);
  if (find.length === 0) {
    arr.unshift("");
    arr.push("");
  }
  return arr.join(rep);
}
