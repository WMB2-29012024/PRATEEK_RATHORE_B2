// Write a for-loop, and log the current and its immediate next element


let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function newarr(arr) {
    let sec2 = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i === arr.length - 1) {
            sec2.push([arr[i]])
        }
        else {
            sec2.push([arr[i], arr[i + 1]])
        }
    }
    return sec2;
}
console.log(newarr(numArr));
