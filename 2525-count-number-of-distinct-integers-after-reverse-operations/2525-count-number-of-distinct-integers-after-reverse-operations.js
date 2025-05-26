/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    

    let a="";

    let n=[];
    nums.map(nu => n.push(nu))

    for(let i=0;i<nums.length;i++){
        a+=nums[i];
        let s=a.split("").reverse().join("");
        let sp=Number(s)
        n.push(sp)
        a="";
    }


    let u=[...new Set(n)]
    return(u.length)
};