class Stack {
    constructor(size) {
        this.items = [];
        this.maxsize = size;
        this.currentsize = 0;
    }

    stackPush(elem) {
        if (this.currentsize >= this.maxsize) {
            return "stack is full";
        } else {
            this.items.push(elem);
            this.currentsize += 1;
            return this.currentsize;
        }
    }

    stackPop() {
        if (this.currentsize === 0) {
            return new Error("stack underflow");
        }
        this.currentsize -= 1;
        return this.items.pop();
    }

    peek() {
        if (this.currentsize === 0) {
            return "Stack is empty";
        } else {
            const lastelm = this.items[this.currentsize - 1];
            return lastelm;
        }
    }

    isEmpty() {
        return this.currentsize === 0;
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(data) {
        const dataNode = new Node(data) // {data:  , next:null}
        if (this.size === 0) {
            //when Queue is empty

            this.front = dataNode;
            this.rear = this.front;
            this.size += 1;
        }
        else {
            this.rear.next = dataNode;
            this.rear = dataNode;
            this.size += 1;
        }
        return this.size;


    }
    dequeue() {
        const popElement = this.front;
        this.front = popElement.next;
        if (this.front === null) this.rear = null;
        this.size -= 1;
        return popElement.data;
    }
    peek() {
        /** when queue is empty */
        if (this.front === null) {
            return null;
        }
        return this.front.data;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

}
// Input: array = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
// Output: [3, 3, 4, 5, 5, 5, 6]
let arr= [1, 2, 3, 1, 4, 5, 2, 3, 6];
let k=3;
let maxofsubarr=(arr)=>{
    let newqueue= new Queue();
    let max=-1;
    let newarr=[]
    for(let i=0;i<arr.length;i++){
        max=Math.max(max,arr[i])
        if(i>=k-1){
            newqueue.enqueue(max);
        }
    }
    while(!newqueue.isEmpty()){
        dequeueelem=newqueue.dequeue();
        newarr.push(dequeueelem);

    }
    return newarr;
}
console.log(maxofsubarr(arr));
