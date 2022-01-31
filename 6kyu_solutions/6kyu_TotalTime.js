// Write the function totalTime(), which accepts an array. The array contains an arbitrary number of strings, where each string represents a duration in time (hours, minutes, seconds). The function should add all the durations and return the total time, as a string, on the following format: "(num) days, (num) hours, (num) minutes, (num) seconds"

// Restrictions
// Your function should only return days, hours, minutes and seconds if they are > 0
// If the sum of all the values in the array are zero, your function should return "0" (a string)
// The string values in the array will never represent negative numbers. I.e. the sum of all the values in the array will never be less than 0.
// The array will always contain at least one string. There is no need to check for empty arrays.
// You can assume that all strings in the array follow the following pattern: "hh:mm:ss", where h - hours; m - minutes; s - seconds
// Note that hours and minutes are optional, so a more precise (but harder to read) specification is: [[hh:]mm:]ss
// If a duration is less than 10 it will always be preceeded by a zero. I.e. expect to always get this format: ["01:01:01"]. You will never get this format: ["1:1:1"]
// Remember that each value in the string returned by your function should be followed by a comma (unless it is the last value).
// Wrong: "1 day 3 hours 5 minutes"
// Correct: "1 day, 3 hours, 5 minutes"
// Example 1
// If hours and/or minutes are 0 they should be excluded from the answer.

// totalTime(['60']); // --> "1 minute"
// Note that the above answer is "1 minute" and not "1 minute 0 seconds"

// Example 2
// The unit name should be pluralized by adding an "s" if its value is more than 1.

// totalTime(['25:01:01']); // --> "1 day, 1 hour, 1 minute, 1 second"
// totalTime(['50:02:02']); // --> "2 days, 2 hours, 2 minutes, 2 seconds"
// Note that "1 second" does not end with an "s", while "2 seconds" does. Same goes for days, hours and minutes.

// Some final examples:
// totalTime(['01:20','03:10']);    // --> '4 minutes, 30 seconds'
// totalTime(['00:50','00:30']);    // --> '1 minute, 20 seconds'
// totalTime(['01:20:00','40:00']); // --> '2 hours'
// totalTime(['12:00:00','10:00:00','02:00:00']); // --> '1 day'
// totalTime(['24:00:00','24:00:00','07']); // --> '2 days, 7 seconds'

function totalTime(arr) {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let remainder = 0;

  if (arr.length === 2) {
    let sum = 0;
    let min1 = arr[0].split(":");
    let min2 = arr[1].split(":");

    if (min1.length === 3 && min2.length === 2) {
      hours = Number(min1[0]);
      let minSum = Number(min1[1]) + Number(min2[0]);
      let minHours = Math.floor(minSum / 60);
      minutes = minSum % 60;
      hours = hours + minHours;
      if (hours === 1) {
        hours = `${hours} hour`;
      } else {
        hours = `${hours} hours`;
      }
      return hours;
    }

    let minSum = Number(min1[0]) + Number(min2[0]);
    let secSum = Number(min1[1]) + Number(min2[1]);

    if (minSum === 0) {
      minutes = Math.floor(secSum / 60);
      seconds = secSum % 60;

      if (minutes === 1) {
        minutes = `${minutes} minute`;
      } else {
        minutes = `${minutes} minutes`;
      }
      if (seconds === 1) {
        seconds = `${seconds} second`;
      } else {
        seconds = `${seconds} seconds`;
      }
      return `${minutes}, ${seconds}`;
    } else {
      if (minSum === 1) {
        minSum = `${minSum} minute`;
      } else {
        minSum = `${minSum} minutes`;
      }
      if (secSum === 1) {
        secSum = `${secSum} second`;
      } else {
        secSum = `${secSum} seconds`;
      }
      return `${minSum}, ${secSum}`;
    }
    // minutes = Math.floor(Number(arr[0][0]) + Number(arr[1][0]));
    // seconds = Number(arr[0][1]) + Number(arr[1][1]);
    // let remainder = Math.floor(Number(arr[0][1]) + Number(arr[1][1])) % 60;
    // //    console.log(remainder)
    // seconds = Math.floor(remainder);
    //  console.log(arr2)
    //  days = Math.floor(Number(arr[0] / 24));
    //  remainder = Number(arr[0]) % 24;
    //  hours = Math.floor(remainder);
    //  minutes = Math.floor(Number(arr[1]));
    //  seconds = Number(arr[2]);
  }
  arr = arr[0].split(":");
  if (arr.length === 1) {
    let numOfMins = Number(arr[0]);
    if (numOfMins >= 60) {
      minutes = Math.floor(numOfMins / 60);
      seconds = numOfMins % 60;
      if (minutes === 1) {
        minutes = `${minutes} minute`;
      } else {
        minutes = `${minutes} minutes`;
      }
      if (seconds === 1) {
        seconds = `${seconds} second`;
      } else {
        seconds = `${seconds} seconds`;
      }
      return seconds === "0 seconds" ? `${minutes}` : `${minutes}  ${seconds}`;
    }
  } else if (arr.length === 3) {
    console.log("3");
    days = Math.floor(Number(arr[0] / 24));
    console.log(days);
    remainder = Number(arr[0]) % 24;
    hours = Math.floor(remainder);
    minutes = Math.floor(Number(arr[1]));
    seconds = Number(arr[2]);
    if (days === 1) {
      days = `${days} day`;
    } else {
      days = `${days} days`;
    }
    if (hours === 1) {
      hours = `${hours} hour`;
    } else {
      hours = `${hours} hours`;
    }
    if (minutes === 1) {
      minutes = `${minutes} minute`;
    } else {
      minutes = `${minutes} minutes`;
    }
    if (seconds === 1) {
      seconds = `${seconds} second`;
    } else {
      seconds = `${seconds} seconds`;
    }
    return hours === "0 hours"
      ? `${minutes},  ${seconds}`
      : `${days}, ${hours}, ${minutes}, ${seconds}`;
  }

  if (arr.length === 2) {
    return sumTime(arr);
  }
  arr = arr.toString("").split(":");
  if (arr.length === 1) {
    if (Number(arr[0]) === 60) {
      let minutes = Math.floor(Number(arr[0] / 60));
      return minutes === 1 ? minutes + " " + "minute" : minutes + "minutes";
    } else {
      arr[0].toString() + " " + "minutes";
    }
  }
  if (arr.length === 3) {
    return splitTime(arr);
  } else {
    arr = arr.toString("").split(":");
    let sum = Number(arr.join(""));
    if (sum.length === 1 && sum === 60) {
      return `1 minute`;
    } else {
      return `${sum} minutes`;
    }
  }
}

console.log(totalTime(["01:20:00", "40:00"]));

function splitTime(arr) {
  let days = Math.floor(Number(arr[0] / 24));
  let remainder = Number(arr[0]) % 24;
  let hours = Math.floor(remainder);
  let minutes = Math.floor(Number(arr[1]));
  let seconds = Number(arr[2]);

  if (days === 1) {
    days = `${days} day`;
  } else {
    days = `${days} days`;
  }

  if (minutes === 1) {
    minutes = `${minutes} minute`;
  } else {
    minutes = `${minutes} minutes`;
  }

  if (hours === 1) {
    hours = `${hours} hour`;
  } else {
    hours = `${hours} hours`;
  }

  if (seconds === 1) {
    seconds = `${seconds} second`;
  } else {
    seconds = `${seconds} seconds`;
  }

  return days + " " + hours + " " + minutes + " " + seconds;
}

function sumTime(arr) {
  //     let days = Math.floor(Number(arr[0] / 24));
  //   let remainder = Number(arr[0]) % 24;
  //   let hours = Math.floor(remainder);
  //   for(let i = 0; i < arr.length; i++){
  //       if(arr[0].split(":").length === 3 || arr[1].split(":").length === 3){
  //       }
  //   }
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  arr[0] = arr[0].split(":");
  arr[1] = arr[1].split(":");

  if (arr[0].length === 2 && arr[0].length === 2) {
    minutes = Math.floor(Number(arr[0][0]) + Number(arr[1][0]));
    seconds = Number(arr[0][1]) + Number(arr[1][1]);
    let remainder = Math.floor(Number(arr[0][1]) + Number(arr[1][1])) % 60;
    //    console.log(remainder)
    seconds = Math.floor(remainder);
    if (minutes === 0) {
      minutes = Math.floor((Number(arr[0][1]) + Number(arr[1][1])) / 60);
      let remainder = Math.floor(Number(arr[0][1]) + Number(arr[1][1])) % 60;
      //    console.log(remainder)
      seconds = Math.floor(remainder);
    }
  } else if (arr[0].length === 3 && arr[1].length === 2) {
    //   days = Math.floor(Number(arr[0] / 24));
    //   hours = Math.floor((Number(arr[0][1]) + Number(arr[1][0])) / 60);
    minutes = Number(arr[0][1]) + Number(arr[1][0]);
    console.log(minutes);
    if (minutes === 60) {
      hours = Number(arr[0][0]) + 1;
      minutes = Math.floor(minutes % 60);
      return minutes === 0
        ? `${hours} hours`
        : hours + "," + " " + minutes + "," + " ";
    } else {
      let remainder = Math.floor(minutes % 60);
      hours = Number(arr[0][1] + minutes);
    }

    //   console.log(hours)
  }

  if (hours === 1) {
    //   console.log("HEERE")
    hours = `${hours} hour`;
    // console.log(hours, "HERE")
  } else {
    hours = `${hours} hours`;
  }

  if (minutes === 1) {
    minutes = `${minutes} minute`;
  } else {
    minutes = `${minutes} minutes`;
  }
  if (seconds === 1) {
    seconds = `${seconds} second`;
  } else {
    seconds = `${seconds} seconds`;
  }

  //   return hours + "," + " ", + minutes + "," + " " + seconds;
  return hours + "," + " " + minutes;
}
// console.log(sumTime(["1:30:00", "40:00"]));

// function totalTime(arr) {

//     if(arr.length === 2) {
//       return sumTime(arr)
//     }
//       arr = arr.toString("").split(":");
//       console.log(Number(arr[0]))
//       console.log(arr.length)
//       if (arr.length === 1) {
//           if(Number(arr[0]) === 60) {
//           let minutes = Math.floor(Number(arr[0] / 60))
//           return minutes === 1 ? minutes + " " + "minute" : minutes + "minutes";
//       } else {
//           arr[0].toString() + " " + 'minutes'
//       }
//   }
//   if (arr.length === 3) {
//     return splitTime(arr);
//   } else {
//     arr = arr.toString("").split(":");
//     let sum = Number(arr.join(""));
//     //   console.log(sum);
//     if (sum.length === 1 && sum === 60) {
//       return `1 minute`;
//     } else {
//       return `${sum} minutes`;
//     }
//   }
//   }

//   function splitTime(arr) {
//     let days = Math.floor(Number(arr[0] / 24));
//     let remainder = Number(arr[0]) % 24;
//     let hours = Math.floor(remainder);
//     let minutes = Math.floor(Number(arr[1]));
//     let seconds = Number(arr[2]);

//     if (days === 1) {
//       days = `${days} day`;
//     } else {
//       days = `${days} days`;
//     }

//     if (minutes === 1) {
//       minutes = `${minutes} minute`;
//     } else {
//       minutes = `${minutes} minutes`;
//     }

//     if (hours === 1) {
//       hours = `${hours} hour`;
//     } else {
//       hours = `${hours} hours`;
//     }

//     if (seconds === 1) {
//       seconds = `${seconds} second`;
//     } else {
//       seconds = `${seconds} seconds`;
//     }

//     return `${days}, ${hours}, ${minutes}, ${seconds}`;
//   }

//   function sumTime(arr) {
//   arr[0] = arr[0].split(":");
//     arr[1] = arr[1].split(":");

//     let minutes = Math.floor(Number(arr[0][0]) + Number(arr[1][0]));
//     let seconds = Number(arr[0][1]) + Number(arr[1][1]);
//     let remainder = Math.floor(Number(arr[0][1]) + Number(arr[1][1])) % 60;
//     //    console.log(remainder)
//     seconds = Math.floor(remainder);
//     if (minutes === 0) {
//       minutes = Math.floor((Number(arr[0][1]) + Number(arr[1][1])) / 60);
//       let remainder = Math.floor(Number(arr[0][1]) + Number(arr[1][1])) % 60;
//       //    console.log(remainder)
//       seconds = Math.floor(remainder);
//     }

//     if (minutes === 1) {
//       minutes = `${minutes} minute`;
//     } else {
//       minutes = `${minutes} minutes`;
//     }
//     if (seconds === 1) {
//       seconds = `${seconds} second`;
//     } else {
//       seconds = `${seconds} seconds`;
//     }

//     return minutes + "," + " " + seconds;

//   }
