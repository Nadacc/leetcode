/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let e=nums.filter(n => n%2==0).filter(m => m%3==0);

    let len=e.length;
    if(len == 0) return 0;
    let avg = Math.floor(e.reduce((a,b) => a+b,0)/len)
    return(avg)
};