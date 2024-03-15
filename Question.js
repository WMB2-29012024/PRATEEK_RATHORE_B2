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
// // const reverseQueue =(queue)=>{
// //     const newstack= new Stack(queue.size);
// //     while(!queue.isEmpty()){
// //         newstack.stackPush(  queue.dequeue())
// //     }
// //    while(!newstack.isEmpty()){
// //      queue.enqueue(newstack.stackPop());
// //    }
// // }
// // // Input: Queue = [1, 2, 3, 4, 5]
// // // Output: [5, 4, 3, 2, 1]

// // let arr = [1, 2, 3, 4, 5]
// // let newqueue = new Queue()

// //  console.log(newqueue.enqueue(1));
// // console.log(newqueue.enqueue(22));
// // console.log(newqueue.enqueue(35));
// // console.log(newqueue.enqueue(46));
// // console.log(newqueue.enqueue(5));
// // console.log(reverseQueue(newqueue))
let str="A man a plan a canal Panama"


let pallendromic =(str)=>{

    let space_lowwer=str.toLowerCase().replaceAll(" ","")
    let newqueue = new Queue()

    let result="";

    for(let i= space_lowwer.length-1;i>=0;i--){
        let newarr= space_lowwer[i]
       newqueue.enqueue(newarr);  
    }
   
 while(!newqueue.isEmpty()){
  let dequeueelem=newqueue.dequeue();
    result+=dequeueelem

 }
 return result === space_lowwer;
// return result
}
console.log(pallendromic(str))