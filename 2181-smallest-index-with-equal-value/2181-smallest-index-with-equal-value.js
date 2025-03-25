/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    let a=[];
    for(let i=0;i<nums.length;i++){
        if(i%10==nums[i]){
            a.push(i)
        }
    }

    if(a.length>=1){
        return Math.min(...a)
    }
    else{
        return -1
    }
};