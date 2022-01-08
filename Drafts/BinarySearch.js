// A binary search algorithm is a way to look for the index of a certain value in a sorted array.

// The algorithm will progressively cut the original array into smaller and smaller chunks until it finds the desired value. If the desired value is not found, return -1.

// Let's take a look at an illustration from Wikipedia:

// The list to be searched: L = 1 3 4 6 8 9 11. The value to be found: X = 4.

// Compare X to 6. X is smaller. Repeat with L = 1 3 4.

// Compare X to 3. X is bigger. Repeat with L = 4.

// Compare X to 4. They are equal. We're done, we found X.

// More information on Wikipedia

// This makes it efficient for particularly large arrays because it doesn't have to completely iterate over them, so it will only take logarithmic time.

// Write a function binSearch that can perform a binary search on large arrays and not time out. The function will have 2 parameters, which are a sorted array and an element to search.

// Note: indexOf, lastIndexOf, eval, sort and sortedIndex are disabled.

function binSearch(arr, toSearch) {
  // TODO
  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === toSearch) {
    console.log('match', arr[mid], toSearch);
    return arr[mid];
} else if (arr[mid] < toSearch && arr.length > 1) {
    console.log('mid lower', arr[mid], toSearch);
    return binSearch(arr.splice(mid, Number.MAX_VALUE), toSearch);
} else if (arr[mid] > toSearch && arr.length > 1) {
    console.log('mid higher', arr[mid], toSearch);
    return binSearch(arr.splice(0, mid), toSearch);
} else {
    return -1
  }
  //     if(toSearch <= mid) {
  //         while(arr.length > 0){
  //             let node = arr.shift()
  //         }
  //     for (let i = 0; i <= mid; i++) {
  //         if (arr[i] === toSearch) {
  //         return i;
  //       }
  //     }
  //   } else {
  //     for (let i = mid; i < toSearch; i++) {
  //       if (arr[i] === toSearch) {
  //         return i;
  //       } else {
  //         return -1;
  //       }
  //     }
  //   }
}
let arr = [1, 2, 3, 4, 5];
console.log(binSearch(arr, 2));
