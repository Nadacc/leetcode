/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let missing = [];

    
    for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index]; 
        }
    }

    
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            missing.push(i + 1); 
        }
    }

    return missing;
};
