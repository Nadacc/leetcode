/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort(function(a,b){return b-a})

    for(let i=0;i<nums.length;i++){
        if(nums.includes(-nums[i])){
        return(nums[i])
        break;
        }
    }
    return -1;

};