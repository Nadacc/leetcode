/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let missing = [];

    // Step 1: Mark numbers as seen by flipping the sign at the corresponding index
    for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1; // Convert number to index
        if (nums[index] > 0) {
            nums[index] = -nums[index]; // Mark the number as seen
        }
    }

    // Step 2: Collect missing numbers
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            missing.push(i + 1); // Convert index back to number
        }
    }

    return missing;
};
