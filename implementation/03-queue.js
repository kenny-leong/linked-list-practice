const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        const newNode = new SinglyLinkedNode(val);

        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        if (!this.head) return null;

        if (this.length == 1) {
            const removedHead = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return removedHead;
        }

        let removed = this.head.value;

        this.head = this.head.next;
        this.head.prev = null;
        this.length--;

        return removed

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
