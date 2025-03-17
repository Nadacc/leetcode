/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let p= nums.filter(num => num>0);
    let n = nums.filter(num => num<0);

    let m=Math.max(p.length,n.length)
    return m
};