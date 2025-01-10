/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let num=[]
    num.push(a);
    num.push(b);

    let sum=num.reduce((total,value) => total+value,0)
    return sum
};