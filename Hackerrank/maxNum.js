// write a function solution that, given an interger N retutns the ,maximum possible value obtainable
// by deleting on '5'

// given N = 15958 return 1958
// given N = -5000 return 0

function solution(N) {
  let arrOfPossibleNums = [];

  const numAsString = N.toString();
  const numAsArr = numAsString.split(""); 

  for (let i = 0; i < numAsArr.length; i++) {
    if (numAsArr[i] == "5") {
      let num = numAsString.slice(0, i) + numAsString.slice(i + 1);
      arrOfPossibleNums.push(num);
    }
  }

  return Math.max(...arrOfPossibleNums);
}
console.log(solution(15979));
