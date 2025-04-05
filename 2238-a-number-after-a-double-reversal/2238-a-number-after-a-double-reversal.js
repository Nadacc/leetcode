/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let temp=num;

    let rev=0;
    while(temp>0){
        let rem=temp%10;
        rev=rev*10+rem;
        temp=Math.floor(temp/10);
    }
    let r=rev;
    let re=0;
    while(r>0){
        rem=r%10;
        re=re*10+rem;
        r=Math.floor(r/10);
    }
    if(num==re){
        return(true)
    }
    else{
        return(false)
    }
};