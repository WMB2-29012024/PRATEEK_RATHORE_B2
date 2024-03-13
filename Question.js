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

const input = 18;

const Decimal_to_Binary = (num) => {
    const mystack = new Stack(num);
    let result = "";

    while (num > 0) {
        const remainder = num % 2;
        mystack.stackPush(remainder);
        num = Math.floor(num / 2);
    }

    while (!mystack.isEmpty()) {
        const popElem = mystack.stackPop();
        result += popElem;
    }
    return result;
};

console.log(Decimal_to_Binary(input));
