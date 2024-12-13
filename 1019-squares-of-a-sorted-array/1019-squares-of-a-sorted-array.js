/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let sq=[];
    let temp=nums[0];
    for(let i=0;i<nums.length;i++){
        sq.push(nums[i]**2);
    }
    for(let i=0;i<sq.length;i++){
        for(let j=i;j<sq.length;j++){
            if(sq[i]>sq[j]){
                temp=sq[i];
                sq[i]=sq[j];
                sq[j]=temp;
            }
        }
    }
    return sq;
};