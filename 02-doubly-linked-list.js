// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        const newNode = new DoublyLinkedNode(val);

        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) return undefined;

        if (this.length == 1) {
            const removedHead = this.head.value;
            this.head = null;
            this.length--;
            return removedHead;
        }

        let removed = this.head.value;

        this.head = this.head.next;
        this.head.prev = null;
        this.length--;

        return removed


        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if(!this.tail) {
            return undefined; //undefined when list is empty
        }

        let removedTail = this.tail; //store value of the tail to be removed
        this.length--; //decrement list length if not empty

        if(!this.tail.prev) {
            this.tail = null; //if only one element, set this.tail to null to remove it
            return removedTail.value; //return value of removed tail
        }

        this.tail = this.tail.prev; //update tail to be the prev node
        this.tail.next = null; //update next of the new tail to be null
        return removedTail.value; //return the value of the removed tail

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtHead() {
        if (!this.head) return undefined;

        return this.head.value;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if (!this.tail) return undefined;

        return this.tail.value;

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
