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

  // for(let i = 0; i < arr.length; i++){
  //    arr[i] = arr[i].split(":")
  //    seconds += Number(arr[i][1])
  //    minutes += Number(arr[i][0])
  //    console.log(Number(seconds))
  //   //  minSum = Number(arr[i][0]) + Number(arr[1])
  // }
  // return `${minutes}, ${seconds}`

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
      seconds = Number(min3[1]);
      console.log(seconds);
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
      return `${days}, ${hours}, ${minutes}, ${seconds}`;
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
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(":")) {
        arr[i] = arr[i].split(":");
        if (arr[i].length === 3) {
          hours += Number(arr[i][0]);
          minutes += Number(arr[i][1]);
          seconds += Number(arr[i][2]);
        } else {
          seconds += Number(arr[i][1]);
          minutes += Number(arr[i][0]);
        }
      } else {
        let secSum = 0;
        arr.map((el) => (secSum += Number(el)));
        if (secSum === 1) {
          secSum = `${secSum} second`;
        } else {
          secSum = `${secSum} seconds`;
        }
        return secSum;
      }
    }
    if (seconds >= 60) {
      minutes = minutes + Math.floor(seconds / 60);
      seconds = seconds % 60;
      if (minutes >= 60) {
        hours = hours + Math.floor(minutes / 60);
        minutes = minutes % 60;
      }
      if (hours >= 24) {
        console.log(hours);
        days = Math.floor(hours / 24);
        hours = hours % 24;
      }
    }
    if (seconds === 1) {
      seconds = `${seconds} second`;
    } else {
      seconds = `${seconds} seconds`;
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
    if (days === 1) {
      days = `${days} day`;
    } else {
      days = `${days} days`;
    }
    if (
      days !== "0 days" &&
      hours !== "0 hours" &&
      minutes !== "0 minutes" &&
      seconds !== "0 seconds"
    ) {
      return `${days}, ${hours}, ${minutes}, ${seconds}`;
    } else if (hours === "0 hours") {
      return `${days}, ${minutes}, ${seconds}`;
    } else if (hours === "0 hours") {
      return `${days}, ${minutes}, ${seconds}`;
    } else if (seconds) {
      return `${minutes}, ${seconds}`;
    }
    // if (hours) return `${hours}, ${minutes}, ${seconds}`;
    // if (seconds) return `${minutes}, ${seconds}`;
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
console.log(
  totalTime([
    "23:12:11",
    "06:38:13",
    "10:56:04",
    "06:17:06",
    "28:12:31",
    "33:26:06",
    "49:37:24",
    "13:25:30",
    "65:58:02",
    "46:02:30",
    "62:22:10",
    "64:05:51",
    "13:57:21",
    "70:48:05",
    "39:53:09",
    "50:13:27",
    "40:59:41",
    "48:49:51",
    "14:54:25",
    "37:05:29",
    "53:01:53",
    "58:56:19",
    "61:57:13",
    "12:02:08",
    "11:44:34",
    "54:17:00",
    "45:01:22",
    "62:21:37",
    "47:57:10",
    "69:26:49",
    "63:47:14",
    "63:44:48",
    "35:19:52",
    "49:47:14",
    "58:54:26",
    "33:46:45",
    "13:48:39",
    "16:32:34",
    "51:04:40",
    "01:12:47",
    "00:28:27",
    "57:29:17",
    "25:35:34",
    "49:29:49",
    "52:21:54",
    "37:52:48",
    "29:37:54",
    "63:14:40",
    "63:06:05",
    "58:21:37",
    "34:26:31",
    "52:43:07",
    "11:50:49",
    "42:44:55",
    "41:37:37",
    "29:49:23",
    "00:32:29",
    "53:50:33",
    "49:59:04",
    "07:10:42",
    "71:37:03",
    "72:42:54",
    "32:55:58",
    "11:26:05",
    "00:01:06",
    "54:15:07",
    "51:49:33",
    "51:57:40",
    "26:45:40",
    "48:25:12",
    "35:59:41",
    "53:33:29",
    "53:57:13",
    "68:43:18",
    "20:45:23",
    "39:14:13",
    "62:03:44",
    "10:43:02",
    "24:15:02",
    "34:31:32",
    "09:34:37",
    "01:38:14",
    "01:35:52",
  ])
);
