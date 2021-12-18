// Linked Lists - Merge Sort

// Write a MergeSort() function which recursively sorts a list in ascending order. Note that this problem requires recursion.
//  Given FrontBackSplit() and SortedMerge(), you can write a classic recursive MergeSort(). Split the list into two smaller lists, recursively sort those lists, and finally merge the two sorted lists together into a single sorted list. Return the list.

// var list = 4 -> 2 -> 1 -> 3 -> 8 -> 9 -> null
// mergeSort(list) === 1 -> 2 -> 3 -> 4 -> 8 -> 9 -> null
// FrontBackSplit() and SortedMerge() need not be redefined. You may call these functions in your solution.

// These function names will depend on the accepted naming conventions of language you are using. In Python,
// FrontBackSplit() is actually front_back_split(). In JavaScript, it is frontBackSplit(), etc.


function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedMerge( a,  b)
    {
        var result = null;
        /* Base cases */
        if (a == null)
            return b;
        if (b == null)
            return a;
 
        /* Pick either a or b, and recur */
        if (a.val <= b.val) {
            result = a;
            result.next = sortedMerge(a.next, b);
        } else {
            result = b;
            result.next = sortedMerge(a, b.next);
        }
        return result;
    }

function mergeSort(list) {
  // Your code goes here.
  if (list === null || list.next === null) {
    return list;
  }

  let mid = getMiddle(list);
  let midNext = mid.next;

  mid.next = null;
  
  let left = mergeSort(list);
  let right = mergeSort(midNext)

  let sortedList = sortedMerge(left, right)
  return sortedList

}

function getMiddle(head) {
  if (head == null) return head;

  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// ARRAY MERGE SORT (Divide and conquer)

// const testArr = [4, 8, 7, 2, 11, 1, 3];
// // const left = [1, 4, 8];
// // const right = [3, 6];

// const merge = (left, right) => {
//   let sorted = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sorted.push(left.shift());
//     } else {
//       sorted.push(right.shift());
//     }
//   }
//   return [...sorted, ...left, ...right];
//   // for(let i = 0; i < )
// };

// const mergeSort = (arr) => {
//     if(arr.length <= 1) {
//         return arr
//     }
//     const mid = Math.ceil(arr.length/2)
//     const left = arr.splice(0, mid)
//     const right = arr
//     return  merge(mergeSort(left), mergeSort(right))

// }
// console.log(mergeSort(testArr));
