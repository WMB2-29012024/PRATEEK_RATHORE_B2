Array.prototype.myFilter=function(callback){
    if(!Array.isArray(this)){
        return `${this} is not array`
    }
    let resultArray=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            resultArray.push(this[i])
        }
    }
    return resultArray;
}

const arr=[1,2,3,4,5];
const newArr=arr.myFilter((elem)=>{
    return elem % 2;
})
console.log(newArr)