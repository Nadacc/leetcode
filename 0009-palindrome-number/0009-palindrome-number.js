/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let rev=0;
    let rem;
    let temp=x;
    while(x>0){
        rem=x%10;
        rev=rev*10+rem;
        x=Math.floor(x/10);
    }
    if(temp==rev){
        return true;
    }
    else{
        return false;
    }
};