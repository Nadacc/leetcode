/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let a=[];
    for(let i=1;i<=num;i++){
            a.push(i);
    }
    
    let sum=0;
    let result=[];
    for(let i=0;i<a.length;i++){
        let temp=a[i];
        while(temp>0){
            let rem=temp%10
            sum=sum+rem;
            temp=Math.floor(temp/10)
        }
        
        if(sum%2==0){
            result.push(a[i])
        }
        sum=0;
    }

    return result.length
};