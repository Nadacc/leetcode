/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let small=[];
    let great=[];
    let eq=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<pivot){
            small.push(nums[i])
        }
        else if(nums[i]>pivot){
            great.push(nums[i])
        }
        else if(nums[i]==pivot){
            eq.push(nums[i])
        }
    }

    let result=small.concat(eq,great)
    return result

};