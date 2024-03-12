class Stack{
    constructor(size){
        this.Stack=[];
        this.maxsize=size;
        this.currentsize=0;

    }
    stackPush(elem){
        if(this.currentsize >= this.maxsize){
            return "stack is full";
        }else{
            this.Stack.push(elem);
            this.currentsize+=1
            return this.currentsize
        }
        
    }
    stackPop(){
        if(this.currentsize===0){
            return new Error("stack underflow")
        }
        this.removeitem=this.Stack.pop()
        this.currentsize-=1;
        return this.removeitem
    }
    peek(){
        if(this.currentsize ===0){
            return "Stack is empty"
        }else{
            const lastelm=this.stackPop()
             this.stackPush(lastelm)
             return lastelm;
        }
    }
    isEmpty(){
        if(this.currentsize===0){
            return true
        }
        return false;
    }
}
let str="Hello, World!"
 const Reverse_String =(str)=>{
    const stack = new Stack(str.length);
    for(let i=0;i<str.length;i++){
        stack.stackPush(str[i]);
    }
    let ans='';
    while(!stack.isEmpty()){
     ans+=stack.stackPop();
    }
    return ans;
 }
 console.log(Reverse_String(str));




