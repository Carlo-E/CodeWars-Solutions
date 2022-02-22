// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the
// internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word
// where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// function insideOut(x) {
//   let arr = x.split(" ");
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 3) {
//       if (arr[i].length % 2 === 0) {
//         result.push(reverseEven(arr[i]));
//       } else {
//         result.push(reverseOdd(arr[i]));
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result.join(" ");
// }

// function reverseEven(str) {
//   let result = [];
//   let front = [];
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     front.push(str[i]);
//   }
//   result.push(front.reverse().join(""));

//   let back = [];
//   let rev = str.split("").reverse();
//   for (let i = 0; i < Math.floor(rev.length / 2); i++) {
//     back.push(rev[i]);
//   }
//   result.push(back.join(""));

//   return result.join("");
// }

// function reverseOdd(str) {
//   let front = [];
//   let result = [];
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     front.push(str[i]);
//   }
//   result.push(front.reverse().join(""));

//   let mid = "";
//   let middle = Math.floor(str.length / 2);
//   for (let i = 0; i < str.length; i++) {
//     if (i === middle) {
//       mid = str[i];
//     }
//   }
//   result.push(mid);

//   let back = [];
//   let rev = str.split("").reverse("").join("");
//   for (let i = 0; i < Math.floor(rev.length / 2); i++) {
//     back.push(rev[i]);
//   }
//   result.push(back.join(""));
//   return result.join("");
// }
// // how many times does the index appear in the arr
// function checkStuff(num) {
//   let str = num.toString();
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     // if(obj[i]){
//     //   obj[i]++
//     // } else {
//     //   obj[i] = 1
//     // }
//     obj[i] = str[i];
//   }
//   let obj2 = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj2[str[i]]) {
//       obj2[str[i]]++;
//     } else {
//       obj2[str[i]] = 1;
//     }
//   }

//   // 0 = 2
//   // go throught the arr and count how many 0 are there
//   console.log(obj);
//   console.log(obj2);
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.includes(i)) {
//       console.log(true);
//     } else if (!str.includes(i) && str[i] === 0) {
//       console.log(true);
//     }
//   }

//   // 2020
//   // at i = 0, str[i] = 2, there are 2 0s in the arr
//   // at i = 1, str[i] = 0, there are 0 1s in the arr
//   // at i = 2. str[i] = 2, there are 2 2s in the arr
//   // at i = 3, str[i] = 0, there are 0 3s in the arr

//   // let count = 0
//   // for(let i = 0; i < str.lenght; i++){
//   //
//   // }

//   // loop through str
//   // if the value of the index is present that many times inthe array push true to an array
//   // else push false
//   // if every value is true then return 1
//   // else return 0
// }
// // console.log(checkStuff(2020));

// // the index is 0 the values is 2, are there 2 0s in the array ? YES
// // the index is 1 the value is 0; are there no 0s in the array ? YES
// // the index is 2 the values is 2 are there 2 twos in the array ? YES
// // the index is 3 values is 0 are there 0 3s in the array ? YES

// function checkThis(num) {
//   let str = num.toString();
//   let obj = {};
//   for(let i = 0; i < str.length; i++){
//       if(str.includes(i)){
//         // 0 === 2
//         if(obj[i]){
//           obj[i]++
//         } else if(str[i] === 0){
//           obj[i] = 0
//         }
//       } else {
//         obj[i] = 1
//         // console.log("NOT")
//       }
      
//     }
//   // }
//   console.log(obj)
// }
// console.log(checkThis(2020));


function insideOut(x){
  let words = x.split(" ")
  for(let i = 0; i < words.length; i++){
    if(words[i].length % 2 === 0){
       
    } else {
      console.log(words[i], "odd")
    }
  }

function reverseEvenOdd (word) {
  if(word.length % 2 === 0){
    word.map((el, i) => i === (word.length/2 - 1 ))
       
  } else {


  }
}

// taxi

  
}
console.log(insideOut('man i need a taxi up to ubud'))

// loop and check for evens and odds
// if even find middle and reverse 
// then reverse from middle 
// if odd the find middle and store 
// repeat reverse process
