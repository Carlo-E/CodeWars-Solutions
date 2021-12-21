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
  // Your code goes here.
  // Remember to return the context.
  let result = null;
  if (this.head != null) {
    let temp = head;
    let tail = null;
    let current = null;
    let prev = head;
    while (temp != null && temp.next != null) {
      current = temp.next;
      prev = temp;
      temp = temp.next.next;
      if (result === null) {
        current.next = result;
        result = current;
        tail = current;
      } else {
        current.next = tail.next;
        tail.next = current;
        tail = current;
      }
      prev.next = temp;
    }
  }
  return result;
}

function moveNode(source, dest) {
  if (!source) {
    throw new Error("Source is not present !");
  }
  const newSource = source.next;
  source.next = dest;
  return new Context(newSource, source);
}

function moveNode(first, second) {
  if (!first || !second) {
    throw new Error("Error");
  }
  if (first.next != null) {
    first.next = first.next.next;
  }
  if (second.next != null) {
    second.next = second.next.next;
  }

  return new Context(first.next, second.next);
}
