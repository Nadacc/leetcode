/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let num=[];
    for(let i=1;i<=n;i++){
        num.push(i)
    }
    let s=num.sort();
    return s;
};