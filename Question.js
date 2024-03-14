
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
// Example 1:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1]

// Example 2:
// Input: [13, 7, 6, 12]
// Output: [-1, 12, 12, -1]

let nums= [4, 5, 2, 25]

const Nxt_Greater_Element =(nums) =>{
    const mystack=new Stack(nums);
    let newarr=[]
     for(let i=nums.length-1;i>=0;i--){
     let new_num=nums[i];
     while(!mystack.isEmpty() && new_num>=mystack.peek()){
     mystack.stackPop()
    }
   if(mystack.isEmpty()){
    newarr[i] =-1
   } else{
    newarr[i]=mystack.peek();
   }
    }

}
Nxt_Greater_Element(nums)