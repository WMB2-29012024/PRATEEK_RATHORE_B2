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

// Input: "/a//b////c/d//././/.."
// Output: "/a/b/c"
const str=  "/../"
const Simplify_Path=(str)=>{
    const mystack=new Stack(str.length);
    let newstr=str.split('/')
    // console.log(newstr)
    let result='';
    for(let i=0;i<newstr.length;i++){
        let elem=newstr[i];
        if( (elem.charCodeAt() >=65   && elem.charCodeAt() <=90) || ( elem.charCodeAt()  >=97 && elem.charCodeAt() <=122)){
         mystack.stackPush(elem);
        }else if(elem === ".."){
          mystack.stackPop(elem);
        }
    }
  while(!mystack.isEmpty()){
  let pop_elem= mystack.stackPop();
  result= "/"+pop_elem+result

  }

  return (result.length ? result : "/")

}

console.log(Simplify_Path(str))
