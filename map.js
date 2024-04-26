 Array.prototype.myMap=function(callback){
    if(!Array.isArray(this)){
        return`${this} is not method`
    }
    let resultarray=[]
    for(let i=0;i<this.length;i++){
        resultarray.push(callback(this[i],i,this))
    }
    return resultarray;
 }
 const arr=[1,2,3,4,5];
const multipler=arr.myMap(nums=> nums *2)
console.log(multipler)