// Linked Lists - Sorted Insert

// Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

// sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
// sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
// sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
// The push() and buildOneTwoThree() functions do not need to be redefined.

function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
    var node = new Node(data);
  var next = head;
  if (!head) {
    head = node;
  } else if (head.data > node.data) {
    node.next = head;
    head = node;
  } else {    
    while (next.next && next.next.data < node.data) {
      next = next.next
    };
    node.next = next.next;
    next.next = node;
  }
  return head;

}
