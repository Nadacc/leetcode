/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort(function(a,b){return a-b})

    let a=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            a.push(i)
        }
    }
    if(a.length>=1){
        return a
    }
    else{
        return []
    }

};