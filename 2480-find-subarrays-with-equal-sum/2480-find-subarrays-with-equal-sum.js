/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let n=[];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            n.push(nums[i]+nums[j])
            break;
        }
    }
    


    let flag;
    for(let i=0;i<n.length;i++){
        if(n.indexOf(n[i])!=n.lastIndexOf(n[i])){
            flag=1;
            break;
        }
        else{
            flag=0;
        }
    }

    if(flag==1){
        return true
    }
    else{
        return false
    }
};