/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let l=0;
    let r=Math.floor(Math.sqrt(c))
    let sum;
    while(l<=r){
        sum=l**2 + r**2;
        if(sum==c){
            return true
        }
        else if(sum<c){
            l++;
        }
        else{
            r--;
        }
    }
    return false
};