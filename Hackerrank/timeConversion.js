// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_r=internal-search&isFullScreen=true

function timeConversion(s) {
  // Write your code here

  if (s.includes("AM") && s.includes("12")) {
    let arr = s.split(":");
    arr[0] = "00";
    return arr.join(":").substring(0, 8);
  } else if (s.includes("AM")) {
    let arr = s.split(":");
    return arr.join(":").substring(0, 8);
  } else if (s.includes("PM") && s.includes("12")) {
    let arr = s.split(":");
    return arr.join(":").substring(0, 8);
  } else if (s.includes("PM")){
    let arr = s.split(":");
    arr[0] = Number(arr[0]) + 12
    return arr.join(":").substring(0, 8);
  }
}
console.log(timeConversion("02:05:45PM"));

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// if it includes PM we want and is 12 then 12 = 0
