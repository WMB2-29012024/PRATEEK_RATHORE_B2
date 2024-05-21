const nums = [2, 2, 1, 1, 1, 2, 2];
 
const mostRepeatNum = (nums) => {
    const obj = {};  
    let maxCount = 0;  
    let mostFrequentNum;  

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1; 
        } else {
            obj[nums[i]]++;  

        if (obj[nums[i]] > maxCount) {
            maxCount = obj[nums[i]]; 
            mostFrequentNum = nums[i];  
        }
    }
// console.log(obj);
// return mostFrequentNum;
};
console.log(mostFrequentNum);
}

mostRepeatNum(nums);  
