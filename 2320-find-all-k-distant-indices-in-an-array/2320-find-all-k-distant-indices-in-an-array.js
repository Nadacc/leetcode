/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let a=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]==key){
            a.push(i)
        }
    }
    

    let out=[]
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<a.length;j++){
            if((Math.abs(i-a[j]))<=k){
            out.push(i)
            break
        }
        }
        
        
    }
    return out
};