/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let temp=nums[0];
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]>nums[j]){
                temp=nums[i];
                nums[i]=nums[j];
                nums[j]=temp
            }
        }
    }
    return nums
};