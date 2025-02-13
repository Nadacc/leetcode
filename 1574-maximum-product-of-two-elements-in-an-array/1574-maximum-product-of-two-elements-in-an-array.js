/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let m=nums.map(num => num-1)
    
    let p=[];
    for(let i=0;i<m.length;i++){
        for(let j=i+1;j<m.length;j++){
            p.push(m[i]*m[j])
        }
    }
    
    let max=Math.max(...p)
    return max
};