/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let rem;
    while(num>=10){
        let sum=0;
        while(num>0){
            rem=num%10;
            sum=sum+rem;
            num=Math.floor(num/10);
        }
        num=sum;
    }
    
    return num
};