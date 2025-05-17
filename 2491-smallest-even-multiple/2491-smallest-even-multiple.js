/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let s=[];
    let i=1;
    while(i>0){
        if(i%2==0 && i%n==0){
            s.push(i)
            break;
            
            
        }
        i++;
    }
    return s[0]
};