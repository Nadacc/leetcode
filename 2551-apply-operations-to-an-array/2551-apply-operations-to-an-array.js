/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for(let i=0;i<nums.length-1;i++){
    if(nums[i]==nums[i+1]){
        nums[i]=nums[i]*2;
        nums[i+1]=0;
    }
}
let z=[];
let n=[];
for(let j=0;j<nums.length;j++){
    if(nums[j]==0){
        z.push(nums[j])
    }
    else{
        n.push(nums[j])
    }
}
let r = n.concat(z);
return r;
};