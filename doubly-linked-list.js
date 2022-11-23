class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val)

    if (!this.head) {
      this.head = newNode; //set both head and tail to newNode if head doesnt exist
      this.tail = newNode;
    } else {
      newNode.next = this.head; // next is going to be the current head when iterating
      this.head.prev = newNode; //current previous is going to be the new node
      this.head = newNode; //now set the current head to be the new node
    }
    this.length++; //increment the length property
  }

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);
    //if no current tail, head and tail are the newNode
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail; // newNode's prev is the current tail
      this.tail.next = newNode; // current tail's next is newNode
      this.tail = newNode; // update tail to be the newNode
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
