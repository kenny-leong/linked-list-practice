// Basic implementation of Nodes and Linked List for you to use


class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity


        //O(n) solution
        let curr = this.head;
        let length = 0;
        while (curr) {
            length++;
            curr = curr.next;
        }
        return length;

        // O(1) solution

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let curr = this.head;
        let sum = 0;
        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        let curr = this.head;
        let sum = 0;
        let length = 0;
        while (curr) {
            length++;
            sum += curr.value;
            curr = curr.next;
        }
        return sum / length;

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let curr = this.head;

        let index = 0;
        while (curr) {
            if (n !== index) {
                index++;
                curr = curr.next;
            } else {
                return curr;
            }

        }
        return sum / length;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let length = this.listLength();
        let midIndex;

        if (length%2==0) {
            midIndex = (length/2) - 1;
        } else {
            midIndex = (length/2) - 0.5;
        }

        let curr = this.head;

        for (let i=0; i<midIndex; i++) {
            curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?
        let curr = this.head;
        let arr = [];
        let newLinkedList = new SinglyLinkedList;

        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }

        arr.reverse();
        arr.forEach(val => {
            newLinkedList.addToTail(val);
        });

        return newLinkedList;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let currentNode = this.head; //current node references the head
        if (!this.head) return; //if there is no head simply return and exit;

        let prevNode = null; //establish pointer for prev node
        let nextNode = null; //establish pointer for next node

        // (lets use 1 -> 2 -> 3 -> NULL as an example) we want 3 -> 2 -> 1 -> NULL
        while (currentNode) { // while currentNode(this.head) is true...
            nextNode = currentNode.next; //saves a copy of the next node (2)
            currentNode.next = prevNode; //set ur next node to null so it becomes 1 -> null in the linked list
            prevNode = currentNode; //saves the current node (1) to prevNode
            currentNode = nextNode; //sets this.head to node(2)
        }

        //reset the head to be the last node from the original order and return reference to new head;
        this.head = prevNode;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
