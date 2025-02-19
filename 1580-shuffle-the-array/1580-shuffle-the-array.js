/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let l=[];
    let r=[];
    for(let i=0;i<n;i++){
        l.push(nums[i])
    }
    for(let i=n;i<nums.length;i++){
        r.push(nums[i])
    }

    let o=[]
    for(let i=0;i<n;i++){
        o.push(l[i])
        o.push(r[i])
    }
    return o
};