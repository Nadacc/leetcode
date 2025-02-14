/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum=0;
    let n=[];
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        n.push(sum)
    }
    return n
};