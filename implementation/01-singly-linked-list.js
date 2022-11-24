// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        //Time complexity should be O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    removeFromHead() {
        // Remove node at head
        let removed = this.head;

        if (this.head) {
            this.head = this.head.next;
            this.length--;
            return removed;
        }

        // Your code here

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        if (this.length == 0) {
            console.log('List is empty')
            return undefined; //return undefined if no nodes existing
        } else if (this.length == 1) {
            this.head = null; //set head to null if only one existing node
            this.length--; //decrement length property
            return; //return to exit
        }

        let currentNode = this.head;

        // finds the node right before the tail node
        while (currentNode.next.next !== null) { //use next.next
            currentNode = currentNode.next; //second to last node assignment
        }

        //copies a reference of the existing tail node to be removed
        let removed = currentNode.next;

        // sets second to last node's .next to null (so that tail is now the second to last node)
        currentNode.next = null;

        //decrement the length
        this.length--;

        //return removed tail node;
        return removed;


        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    peekAtHead() {
        if (!this.head) {
            return undefined;
        } else {
            return this.head.value;
        }

        // Your code here

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {

        if (!this.head) return;

        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
