// Linked Lists - Sorted Intersect

// Write a SortedIntersect() function which creates and returns a list representing the intersection of two lists that are sorted
// in increasing order. Ideally, each list should only be traversed once. The resulting list should not contain duplicates.

// var first = 1 -> 2 -> 2 -> 3 -> 3 -> 6 -> null
// var second = 1 -> 3 -> 4 -> 5 -> -> 6 -> null
// sortedIntersect(first, second) === 1 -> 3 -> 6 -> null

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function sortedIntersect(first, second) {
  console.log(first);
  console.log(second);
  let head = null;
  let tail = null;
  while (first !== null && second !== null) {
    if (first.data === second.data) {
      if (head === null) {
        head = new Node(first.data, head); // for inserting elements into list
        tail = head;
      } else {
        tail.next = new Node(first.data, tail.next);
        tail = tail.next;
      }
      first = first.next;
      second = second.next;
    } else if (first.data < second.data) {
      first = first.next;
    } else {
      second = second.next;
    }
  }

  function removeDuplicates(head) {
    for (let node = head; node; node = node.next) {
      while (node.next && node.data === node.next.data)
        node.next = node.next.next;
    }
    return head;
  }

  return removeDuplicates(head);
}
