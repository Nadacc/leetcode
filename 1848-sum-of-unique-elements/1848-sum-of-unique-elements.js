/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let u=[];
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
            u.push(nums[i]);
        }
        
    }
    let sum=u.reduce((total,value) => total+value,0)
    return sum;
};