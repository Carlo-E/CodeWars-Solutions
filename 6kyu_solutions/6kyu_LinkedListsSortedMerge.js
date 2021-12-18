// Linked Lists - Sorted Merge

// Write a SortedMerge() function that takes two lists, each of which is sorted in increasing order, and merges the two together into one list which is in increasing order. SortedMerge() should return the new list. The new list should be made by splicing together the nodes of the first two lists. Ideally, SortedMerge() should only make one pass through each list. SortedMerge() is tricky to get right and it may be solved iteratively or recursively.

// var first = 2 -> 4 -> 6 -> 7 -> null
// var second = 1 -> 3 -> 5 -> 6 -> 8 -> null
// sortedMerge(first, second) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 6 -> 7 -> 8 -> null
// There are many cases to deal with: either 'first' or 'second' may be null/None/nil, during processing either 'first' or 'second' may run out first, and finally there's the problem of starting the result list empty, and building it up while going through 'first' and 'second'.

// If one of the argument lists is null, the returned list should be the other linked list (even if it is also null). No errors need to be thrown in SortedMerge().

// function Node(data) {
//     this.data = data === undefined ? null : data;
//     this.next = null;
//   }

//   function sortedMerge(first, second) {
//     // Your code goes here.
//   }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  search(key) {
    let node = this.head;
    while (node) {
      if (node.data === key) {
        return node;
      } else {
        node = node.next;
      }
    }
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      } else {
        node = node.next;
      }
    }
  }

  //   insert(data) {
  //     let newNode = new Node(data);
  //     if (this.head) {
  //       newNode.next = this.head;
  //       this.head = newNode;
  //     } else {
  //       this.head = newNode;
  //     }
  //   }

  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    if (this.head) {
        console.log(this.head)
      this.head.prev = newNode;
    }
    this.head = newNode;
    newNode.prev = null;
  }

  delete(key) {
    let node = this.head;
    while (node) {
      if (node.data === key) {
        node === null;
      } else {
        node = node.next;
      }
    }
  }

  getFirst() {
    return this.head;
  }
}

const months = [
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// let firstNode = new Node(1)
// let secondNode = new Node(2)
// firstNode.next = secondNode

let previousNode = new Node("Jan");
let list = new linkedList(previousNode);
for (let i = 0; i < months.length; i++) {
  let currentNode = new Node(months[i]);
  //  Node { data: 'Jan', next: null }
  previousNode.next = currentNode;
  //  Node { data: 'Jan', next: Node { data: 'Feb', next: null } }
  previousNode = currentNode;
  //  Node { data: 'Jan', next: null } = Node { data: 'Feb', next: null }
  //   console.log(previousNode);
}

console.log(list.insert("Juju"));
console.log(list);

const circularRef = {};
circularRef.circularRef = circularRef;

console.log(circularRef);


function Node(data, nxt) {
    this.data = data;
    this.next = nxt;
  }
  function sortedInsert(head, data) {
    if(!head || data < head.data) return new Node(data, head);
    else {
      head.next = sortedInsert(head.next, data);
      return head;
    }
  }
  