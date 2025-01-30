/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even=nums.filter(num => num%2==0)
    let odd=nums.filter(num => num%2!=0)
    let s=even.concat(odd)
    return s
};