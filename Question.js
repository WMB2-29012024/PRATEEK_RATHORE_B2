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
 class Zigzag_iterator{
     constructor(arr1,arr2){
        this.queue=new Queue(arr1+arr2)
         let i=0; 
         
         while(i<arr1.length && i<arr2.length){
            this.queue.enqueue(arr1[i])
            this.queue.enqueue(arr2[i])
            i+=1

         }
         while(i<arr1.length){
            this.queue.enqueue(arr1[i])
            i++
         }
         while(i<arr2.length){
            this.queue.enqueue(arr2[i])
            i++
         }
    }
    next(){
       return this.queue.dequeue()
    }
    hasnext(){
        return !this.queue.isEmpty()

    }
 }
 const i = new Zigzag_iterator( [1, 2], [3, 4, 5, 6])
 console.log(i.next())
 console.log(i.next())
 console.log(i.next())
 console.log(i.next())
 console.log(i.next())
 console.log(i.next())
 


  
console.log(i.hasnext())  
