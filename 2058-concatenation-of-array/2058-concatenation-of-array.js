/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let dup=[];
    dup.push(nums);
    let c=nums.concat(dup);
    let f=c.flat();
    return f;
};