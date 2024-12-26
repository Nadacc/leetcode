/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let f=nums.filter((num) => num>0);
    let s=f.sort(function(a,b){return (a-b)});

    let smallest=1;
    for(let i=0;i<s.length;i++){
        if(smallest==s[i]){
            smallest++;
        }
        else if(smallest<s[i]){
            break;
        }
       
    }
     return smallest;
    
};