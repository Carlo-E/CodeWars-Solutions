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
  const second = head.next;
  if (!second) {
    throw error;
  }

  let a = first;
  let b = second;

  moveNode(a, b);

  return new Context(first, second);
}

function moveNode(first, second) {
  if (!first || !second) {
    return;
  }
  if (first.next != null) {
    first.next = first.next.next;
  }
  if (second.next != null) {
    second.next = second.next.next;
  }

  return moveNode(first.next, second.next);
}
