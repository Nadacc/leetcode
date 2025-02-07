/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let n=[]
    for(let i=0;i<nums.length;i++){
        n.push(nums[i].toString())
    }
    
    let count=0;
    for(let i=0;i<n.length;i++){
        if((n[i].length)%2==0){
            count++
        }
    }
    return count
};