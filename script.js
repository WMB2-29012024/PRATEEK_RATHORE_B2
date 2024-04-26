const arr=[1,2,3,4,5];
// const multipler=arr.map(nums=> nums *2)
// console.log(multipler)


// const odd =arr.filter((nums)=>{
//    return nums%2 !==0
// })
// console.log(odd)
const reduce=arr.reduce((first,last)=>{
    
    return first+=last;
})
console.log(reduce)