/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    

    let sor= nums.sort(function(a,b){return a-b});


    let s=sor[0];
    let l=sor[sor.length-1];

    let d=[];
    for(let i=1;i<=l;i++){
        if(s%i==0 && l%i==0){
            d.push(i)
        }
    }

    let m=Math.max(...d)
    return m;
};