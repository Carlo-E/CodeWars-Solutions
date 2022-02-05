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

  if (
    arr.every(
      (el) => el === "0" || el === "00" || el === "00:00" || el === "00:00:00"
    )
  ) {
    return "0";
  }

  if (arr.length === 2) {
    if (!arr[0].includes(":") || !arr[1].includes(":")) {
      let sec1 = Number(arr[0]);
      let sec2 = Number(arr[1]);
      let sum = sec1 + sec2;
      if (sum === 1) {
        sum = `${sum} second`;
      } else {
        sum = `${sum} seconds`;
      }

      if (sum === "0 seconds") {
        return `${sum}`;
      }
      return `${sum}`;
    }

    let min1 = arr[0].split(":");
    let min2 = arr[1].split(":");

    if (min1.length === 3 && min2.length === 2) {
      hours = Number(min1[0]);
      seconds = Number(min1[2]) + Number(min2[1]);
      let minSum = Number(min1[1]) + Number(min2[0]);
      let minHours = Math.floor(minSum / 60);
      let secSum = Number(min1[2]) + Number(min2[1]);
      minutes = minSum % 60;
      hours = hours + minHours;

      if (secSum >= 60) {
        minutes = minutes + Math.floor(secSum / 60);
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

      if (minutes === "0 minutes" && seconds === "0 seconds") {
        return `${hours}`;
      } else if (minutes === "0 minutes") {
        return `${hours} ${seconds}`;
      } else if (seconds === "0 seconds") {
        return `${hours} ${minutes}`;
      }
      return `${hours} ${minutes} ${seconds}`;
    } else if (min1.length === 3 && min2.length === 3) {
      hours = Number(min1[0]) + Number(min2[0]);
      minutes = Number(min1[1]) + Number(min2[1]);
      seconds = Number(min1[2] + Number(min2[2]));
      if (hours >= 24) {
        days = Math.floor(hours / 24);
        hours = hours % 24;
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

        if (
          hours === "0 hours" &&
          minutes === "0 minutes" &&
          seconds === "0 seconds"
        ) {
          return `${days}`;
        } else {
          return `${hours}, ${minutes}, ${seconds}`;
        }
      }
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

      if (
        hours === "0 hours" &&
        minutes === "0 minutes" &&
        seconds === "0 seconds"
      ) {
        return `${days}`;
      } else {
        return `${hours}, ${minutes}, ${seconds}`;
      }
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
  } else if (arr.length === 3) {
    console.log("HEEERRREE");
    if (!arr[0].includes(":") || !arr[1].includes(":")) {
      let sec1 = Number(arr[0]);
      let sec2 = Number(arr[1]);
      let sec3 = Number(arr[2]);
      let sum = sec1 + sec2 + sec3;
      if (sum === 1) {
        sum = `${sum} second`;
      } else {
        sum = `${sum} seconds`;
      }
      return sum;
    }
    let min1 = arr[0].split(":");
    let min2 = arr[1].split(":");
    let min3 = arr[2].split(":");
    if (min1.length === 3 && min2.length === 2 && min3.length === 1) {
      seconds = min3[0];
      minutes = min2[0];
      hours = min1[0];
      console.log(hours);
      if (hours >= 24) {
        days = Math.floor(hours / 24);
        hours = hours % 24;
      }
      if (minutes >= 60) {
        hours = hours + Math.floor(minutes / 60);
        minutes = minutes % 60;
      }
      if (seconds >= 60) {
        minutes = seconds / 60;
        seconds = seconds % 60;
      }
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
      return `${days}, ${hours}, ${minutes}, ${seconds}`;
    }
    if (min3.length === 1) {
      hours = Number(min1[0]) + Number(min2[0]);
      minutes = Number(min1[1]) + Number(min2[1]);
      seconds = Number(min3[0]);
      if (hours >= 24) {
        remainder = hours % 24;
        days = Math.floor(hours / 24);
        hours = hours % 24;
        minutes = minutes + remainder;
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
        if (hours === "0 hours" && minutes === "0 minutes") {
          return `${days}, ${seconds}`;
        }
      }
    } else if (min3.length === 2) {
      hours = Number(min1[0]) + Number(min2[0]) + Number(min3[0]);
      minutes = Number(min1[1]) + Number(min2[1]) + Number(min3[0]);
      seconds = Number(min3[1])
      console.log(seconds)
      if (hours >= 24) {
        remainder = hours % 24;
        days = Math.floor(hours / 24);
        hours = hours % 24;
      }
      if (minutes >= 60) {
        hours = hours + Math.floor(minutes / 60);
        minutes = minutes % 60;
      }
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
      return `${days}, ${hours}, ${minutes}, ${seconds}`
    }

    hours = Number(min1[0]) + Number(min2[0]) + Number(min3[0]);
    minutes = Number(min1[1]) + Number(min2[1]) + Number(min3[1]);
    seconds = Number(min1[2]) + Number(min2[2]) + Number(min3[2]);
    if (hours >= 24) {
      remainder = hours % 24;
      days = Math.floor(hours / 24);
      hours = hours % 24;
    }
    if (minutes >= 60) {
      hours = hours + Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
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

    if (hours === "0 hours") {
      return `${days}`;
    }
    return `${days}, ${hours}, ${minutes}, ${seconds}`;
  } else if (arr.length === 4) {
    if (!arr[0].includes(":") || !arr[1].includes(":")) {
      let sec1 = Number(arr[0]);
      let sec2 = Number(arr[1]);
      let sec3 = Number(arr[2]);
      let sec4 = Number(arr[3]);
      let sum = sec1 + sec2 + sec3 + sec4;
      if (sum === 1) {
        sum = `${sum} second`;
      } else {
        sum = `${sum} seconds`;
      }
      return sum;
    }
  } else if (arr.length > 4) {
    let secSum = 0;
    arr.map((el) => (secSum += Number(el)));
    if (secSum === 1) {
      secSum = `${secSum} second`;
    } else {
      secSum = `${secSum} seconds`;
    }
    return secSum;
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
      return seconds === "0 seconds" ? `${minutes}` : `${minutes},  ${seconds}`;
    } else {
      seconds = Number(arr[0]);
      if (seconds === 1) {
        seconds = `${seconds} second`;
      } else {
        seconds = `${seconds} seconds`;
      }
      if (seconds === "0 seconds") {
        return "0";
      }
      return seconds;
    }
  } else if (arr.length === 2) {
    minutes = Number(arr[0]);
    seconds = Number(arr[1]);
    if (seconds >= 60) {
      minutes = minutes + Math.floor(seconds / 60);
      seconds = seconds % 60;
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
    return `${minutes}, ${seconds}`;
  } else if (arr.length === 3) {
    days = Math.floor(Number(arr[0] / 24));
    console.log(days);
    remainder = Number(arr[0]) % 24;
    hours = Math.floor(remainder);
    console.log(hours);
    minutes = Math.floor(Number(arr[1]));
    seconds = Number(arr[2]);
    if (seconds >= 60) {
      minutes = minutes + Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (minutes >= 60) {
      hours = hours + Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
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
    if (days === "0 days") {
      return `${hours}, ${minutes}, ${seconds}`;
    }
    if (seconds === "0 seconds") {
      return `${days}, ${hours}, ${minutes}`;
    }
    if (
      hours === "0 hours" &&
      minutes === "0 minutes" &&
      seconds === "0 seconds"
    ) {
      return days;
    }
    return hours === "0 hours"
      ? `${minutes},  ${seconds}`
      : `${days}, ${hours}, ${minutes}, ${seconds}`;
  }
}
console.log(totalTime(["67:00:00", "00:70:00", "00:30"]));
