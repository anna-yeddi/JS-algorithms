// // === Linked List with a single node ===

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value,
//             next: null
//         };

//         this.length = 1;
//     }
// }

// console.log(new LinkedList('Hello!'));



class LinkedList {
    // // SINGLE VALUE:

    // constructor(value) {
    //     this.head = null;
    //     this.length = 0;
    //     this.addToHead(value);
    // }


    // // MULTIPLE VALUES:

    constructor(...values) {
        this.head = null;
        this.length = 0;
        this.addToHead(...values);
    }

    _addSingleItemToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    addToHead(...values) {
        values.forEach(value => this._addSingleItemToHead(value));
        return this;
    }
    
    // // === Add To / Remove From Head Methods (complexity: O(1) - constant-time operations) ===

    // // SINGLE VALUE:
    
    // addToHead(value) {
    //     const newNode = { value };  // 1 - add a value
    //     newNode.next = this.head;   // 2 - add a reference from the value to the null
    //     this.head = newNode;        // 3 - change head's reference to the value
    //     this.length++;              // increment the length
    //     return this;                // allows to chain function calls
    // }

    removeFromHead() {
        if (this.length === 0) {        // check if list exists
            return undefined;
        }

        const value = this.head.value;  // find the head and it's value
        this.head = this.head.next;     // change head's reference to the next node
        this.length--;                  // decrement the length 

        return value;                   //  => leave the value to the garbage collection
    }

    // // === Find Item (complexity: O(n) - linear-time operation) ===

    findItem(item) {
        let thisNode = this.head;           /// create a reference to head (first selection)

        while (thisNode) {                  // iterate through the list (while items exist)
            if (thisNode.value === item) {  // check if equals to the searching item
                return thisNode;
            }

            thisNode = thisNode.next;       // if not -- go to the next node
        }
        // return thisNode;     // if keep will return NULL if the item wasn't found
    }

    // // === Remove Anywhere (complexity: O(n) - linear operation) ===

    remove(item) {
        if (this.length === 0) {            // check if list exists
            return undefined;
        }

        if (this.head.value === item) {     // if the item is the head...
            this.removeFromHead();          // ...delegate to the existing method
            return this;
        }

        let previousNode = this.head;       // create a reference to head (first selection)
        let thisNode = previousNode.next;   // create a reference to the next node

        while (thisNode) {                  // iterate through the list (while items exist)
            if (thisNode.value === item) {  // break when the item is found
                break;
            }
            previousNode = thisNode;        // update both references, ...
            thisNode = thisNode.next;       // ...if the item is not found
        }

        if (thisNode === null) {            // if the item is not present...
            return undefined;               // ...return undefined
        }

        previousNode.next = thisNode.next;  // if item's found, replace the reference of the node before
        this.length--;                      // decrement the length and leave the item to be garb.coll.
        return this;                        // allows to chain function calls
    }

    // iterate() {
    //     let node = this.head
    //     while (node) {
    //       console.log(node.data)
    //       node = node.next
    //     }
    //   }
      
    //   search(data) {
    //     let idx = 0
    //     let node = this.head
    //     while (node) {
    //       if (node.data === data) return idx
    //       node = node.next
    //       idx += 1
    //     }
    //     return -1
    //   }
}

    // // SINGLE VALUE:

// const list = new LinkedList('first')
//     .addToHead('second')
//     .addToHead('third');


    // // MULTIPLE VALUES:

const list = new LinkedList('first', 'second', 'third');


// // === List will look like: ===

// LinkedList {
//     head: {
//         value: 'third'
//         next: {
//             value: 'second'
//             next: {
//                 value: 'first'
//                 next: null
//             }
//         }
//     },
//     length: 3
// }

console.log('=== ADD TO HEAD METHOD ===');
console.log(list);                                  // linked list with 3 nested nodes
console.log(list.head.next.next.value + ' inner');  // first (inner element)

console.log('=== REMOVE FROM HEAD METHOD ===');
console.log(list.removeFromHead() + ' removed!');   // third (as it is left to be garbage-collected)
console.log(list.head.next.next);                   // null (instead of 'first' as it was moved up)
console.log(list.head.value);                       // second (now head)

console.log('=== FIND ITEM METHOD ===');
console.log(list.findItem('first'));                // { value: 'first', next: null }
console.log(list.findItem('something'));            // undefined

console.log('=== REMOVE ANYWHERE ===');
// list.addToHead('third').addToHead('removable').addToHead('fourth');  // SINGLE VALUE
list.addToHead('third', 'removable', 'fourth');                         // MULTIPLE VALUES
console.log(list);
console.log(list.remove('removable'));