/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let rem;
    let num=n.toString();
    let p=1;
    let sum=0;
    for(i=0;i<num.length;i++){
        p*=parseInt(num[i]);
        sum+=parseInt(num[i]);
    }
    let result=p-sum;
    return result;
};