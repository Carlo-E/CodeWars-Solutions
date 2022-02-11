function totalTime(arr) {
    if (arr.every(el => el === "0" || el === "00" || el === '00:00' || el === '00:00:00')) {
        return '0'
      } 

  let totalCount = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  arr.map((timeString) => {
    let currCount = getCurrCount(timeString);
    totalCount.hours += currCount.hours;
    totalCount.minutes += currCount.minutes;
    totalCount.seconds += currCount.seconds;
  });

  return calculateOverages(totalCount);
}

function getCurrCount(timeString) {
  let count = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  let timeArr = timeString.split(":");

  if (timeArr.length == 2) {
    timeArr.unshift("0");
  }

  if (timeArr.length == 1) {
    timeArr.unshift("0");
    timeArr.unshift("0");
  }

  count.hours = parseInt(timeArr[0]);
  count.minutes = parseInt(timeArr[1]);
  count.seconds = parseInt(timeArr[2]);

  return count;
}

function calculateOverages(totalCount) {
  // return totalCount with days calculated
  if (totalCount.seconds >= 60) {
    totalCount.minutes =
      totalCount.minutes + Math.floor(totalCount.seconds / 60);
    totalCount.seconds = totalCount.seconds % 60;
  }
  if (totalCount.minutes >= 60) {
    totalCount.hours = totalCount.hours + Math.floor(totalCount.minutes / 60);
    totalCount.minutes = totalCount.minutes % 60;
  }
  if (totalCount.hours >= 24) {
    totalCount.days = totalCount.days + Math.floor(totalCount.hours / 24);
    totalCount.hours = totalCount.hours % 24;
  }
  return formatTimeString(totalCount);
}

function formatTimeString(totalCount) {
  // return string

  if (totalCount.days === 1) {
    totalCount.days = `${totalCount.days} day`;
  } else {
    totalCount.days = `${totalCount.days} days`;
  }
  if (totalCount.hours === 1) {
    totalCount.hours = `${totalCount.hours} hour`;
  } else {
    totalCount.hours = `${totalCount.hours} hours`;
  }
  if (totalCount.minutes === 1) {
    totalCount.minutes = `${totalCount.minutes} minute`;
  } else {
    totalCount.minutes = `${totalCount.minutes} minutes`;
  }
  if (totalCount.seconds === 1) {
    totalCount.seconds = `${totalCount.seconds} second`;
  } else {
    totalCount.seconds = `${totalCount.seconds} seconds`;
  }

  if(totalCount.days === '0 days' && totalCount.hours === '0 hours' && totalCount.seconds === '0 seconds'){
      return totalCount.minutes
  }

  if (totalCount.days === "0 days" && totalCount.hours === '0 hours' && totalCount.minutes === '0 minutes' ) {
    return `${totalCount.seconds}`
  } 

  if (totalCount.hours === '0 hours' && totalCount.days === '0 days') {
    return `${totalCount.minutes}, ${totalCount.seconds}`
  } 

  if (totalCount.days === '0 days' && totalCount.minutes === '0 minutes' && totalCount.seconds === '0 seconds') {
    return totalCount.hours
  } 

  if (totalCount.hours === '0 hours' && totalCount.minutes === '0 minutes' && totalCount.seconds === '0 seconds') {
    return totalCount.days
  } 
  
  
  if (totalCount.hours === '0 hours' && totalCount.minutes === '0 minutes') {
    return `${totalCount.days}, ${totalCount.seconds}`
  } 

  if (totalCount.hours === '0 hours' && totalCount.minutes === '0 minutes') {
    return `${totalCount.days}, ${totalCount.seconds}`
  } 

  if (totalCount.days === '0 days') {
    return `${totalCount.hours}, ${totalCount.minutes}, ${totalCount.seconds}`;
  }
  if (totalCount.seconds === '0 seconds') {
    return `${totalCount.hours}, ${totalCount.minutes}, ${totalCount.minutes}`;
  }
//   if (totalCount.hours === '0 hours' && totalCount.days === '0 days' && totalCount.minutes === '0 minutes') {
//     return `${totalCount.seconds}`
//   } 
//   if (totalCount.hours === '0 hours') {
//     return `${totalCount.days}, ${totalCount.minutes}, ${totalCount.seconds}`
//   }
  return `${totalCount.days}, ${totalCount.hours}, ${totalCount.minutes}, ${totalCount.seconds}`;
}

// console.log(getCurrCount("45"))
let arr = ['01'];

console.log(totalTime(arr));
