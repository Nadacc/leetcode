/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len=nums.length;
    let s=nums.sort(function(a,b){return a-b})
    if(s[0]!=0){
        return 0;
    }
    else{
        for(let i=0;i<=len;i++){
        if(s[i+1]!=s[i]+1){
            return s[i]+1;
        }

    }
    }
    
};