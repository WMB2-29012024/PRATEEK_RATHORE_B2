// Write a for-loop, and log the current and its immediate previous element

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function newArray(arr) {
    let newaa = [];
    for (let i = 0; i < arr.length; i++) {

        if (i === 0) {
            newaa.push([arr[i]]);
        }

        else {
            newaa.push([arr[i], arr[i - 1]]);
        }
    }
    console.log(newaa);


}
newArray(numArr)
