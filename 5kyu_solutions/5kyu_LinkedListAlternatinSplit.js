// Linked Lists - Alternating Split

// Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should
// be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist
// should be a -> a -> a -> null and the other should be b -> b -> null.

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  const first = head;
  // 1 - 2 - null
  const second = head.next;
  // 2 - null
  if (!second) {
    throw error;
  }

  moveNode(first, second);

  return new Context(first, second);
}

function moveNode(first, second) {
  if (!first || !second) {
    return;
  }
  if (first.next != null) {
    first.next = first.next.next;
    // 2 - null = null
  }
  if (second.next != null) {
    second.next = second.next.next;
    // null = undefined 
  }

  return moveNode(first.next, second.next);
}
