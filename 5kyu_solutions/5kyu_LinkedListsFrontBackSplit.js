// Linked Lists - Front Back Split

// Write a FrontBackSplit() function that takes one list and splits it into two sublists — one for the front half, and one for the
// back half. If the number of elements is odd, the extra element should go in the front list. For example, FrontBackSplit() on the
// list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null. Getting this right for all the cases is harder than it looks. You will probably need special case code to deal with lists of length < 2 cases.

// var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
// var front = new Node()
// var back = new Node()
// frontBackSplit(source, front, back)
// front === 1 -> 3 -> 7 -> 8 -> null
// back === 11 -> 12 -> 14 -> null
// You should throw an error if any of the arguments to FrontBackSplit are null or if the source list has < 2 nodes.

// Hint. Probably the simplest strategy is to compute the length of the list, then use a for loop to hop over the right number of
// nodes to find the last node of the front half, and then cut the list at that point. There is a trick technique that uses two pointers
// to traverse the list. A "slow" pointer advances one nodes at a time, while the "fast" pointer goes two nodes at a time. When the fast pointer
// reaches the end, the slow pointer will be about half way. For either strategy, care is required to split the list at the right point.

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function frontBackSplit(source, front, back) {
  //     let len = size(source)
  //     let mid = Math.ceil(len / 2)
  //     let current = front
  //     while (mid) {
  //       if (current.data) {
  //         let newNode = new Node(source.data)
  //         current.next = newNode
  //         current = current.next
  //       } else {
  //         current.data = source.data
  //       }
  //       source = source.next
  //       mid--
  //     }
  //     back.data = source.data
  //     return back.next = source.next
  //   }
  // function size(node) {
  //   let count = 0;
  //   while (node) {
  //     count++;
  //     source = source.next;
  //   }
  //   return count;
  // }
}

function frontBackSplit(source, front, back) {
  if (!source || !source.next) {
    throw new Error();
  }

  front.data = source.data;
  front.next = source.next;

  let slow = front;
  let fast = front;
  while (fast) {
    fast = fast.next && fast.next.next;
    if (fast) {
      slow = slow.next;
    }
  }

  back.data = slow.next && slow.next.data;
  back.next = slow.next && slow.next.next;
  slow.next = null;
}


