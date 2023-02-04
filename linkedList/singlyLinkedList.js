class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.size = 0;
    this.value = null;
  }

  insertAtEnd(value) {
    if (this.size === 0) {
      this.value = new Node(value);
    } else {
      let node = this.value;
      while (node.next != null) {
        node = node.next;
      }
      node.next = new Node(value);
    }

    this.size++;

    return this;
  }

  insertAtBeginning(value) {
    this.value = new Node(value, this.head());
    this.size++;

    return this;
  }

  insertAtMiddle(value) {
    const middleLength = Math.ceil(this.length() / 2);

    let node = this.value;

    for (let i = 0; i < middleLength; i++) {
      node = node.next;
    }

    node.next = new Node(value, { ...node.next });

    this.size++;

    return this;
  }

  deleteAtBeginning() {
    this.value = this.head().next;
    this.size--;

    return this;
  }

  deleteAtEnd() {
    let node = this.value;

    while (node.next.next != null) {
      node = node.next;
    }

    node.next = null;
    this.size--;

    return this;
  }

  deleteAtMiddle() {
    const middleLength = Math.ceil(this.length() / 2);
    let node = this.value;

    for (let i = 0; i < middleLength; i++) {
      node = node.next;
    }

    node.next = node.next.next;

    this.size--;

    return this;
  }

  transversal() {
    let node = this.head();
    while (node != null) {
      console.log(`[Node_Value]: ${node.value}`);
      node = node.next;
    }

    return this;
  }

  search(value) {
    let node = this.head();

    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  head() {
    return this.value;
  }

  length() {
    return this.size;
  }
}

module.exports = SinglyLinkedList;
