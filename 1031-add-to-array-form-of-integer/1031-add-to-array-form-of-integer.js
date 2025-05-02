/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let n=num.join("")
    let big=BigInt(n);
    let bigk=BigInt(k)
    let sum=big+bigk;
    let out=sum.toString()
    let output = out.split("").map(n => Number(n));
    return output
};