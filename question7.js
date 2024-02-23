// Write a for-loop to log every 4th element, starting from last index

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function everyfourth_ele(){
    for(let i=1; i<numArr.length;i+=4){
        console.log(numArr[i]);
    }
}
everyfourth_ele()