Array.prototype.myReduce=function(callback,initialValue){
    if(!Array.isArray(this)){
        return`${this} is not array`
    }
    let acc=initialValue;
    for(let i=0;i<this.length;i++){
        if(acc){
           acc= callback(acc,this[i],i,this);
        }
        else{
              acc=this[i];
        }
    }
    return acc;
}
const arr=[1,2,3,4,5];
const link=arr.myReduce((elem,next)=>{
    return elem+=next;

})
console.log(link);