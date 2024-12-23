/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let f=[-1,-1];
    for(let i=0;i<nums.length;i++){
        f[0]=nums.indexOf(target);
        f[1]=nums.lastIndexOf(target);
        if(nums[i]!==target){
            return f;
        }
    }
    return f;
};