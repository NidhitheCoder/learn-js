class LinkedList {
    constructor() {
        this.head = null
    }
}

LinkedList.prototype.push = function (value) {
    let node = {
        value: value,
        next: null
    }


    if (!this.head) {
        this.head = node
    } else {
        current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = node
    }
}

const ll = new LinkedList();

ll.push(123)
ll.push(234)
ll.push(345)

console.log(ll.head)