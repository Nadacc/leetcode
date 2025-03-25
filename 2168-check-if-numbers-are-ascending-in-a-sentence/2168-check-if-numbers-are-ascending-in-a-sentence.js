/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let x=s.split(" ").map((num) => parseInt(num)).filter((n) => !isNaN(n));
   
    let r;
    let largest=x[0];

    for(let j=1;j<x.length;j++){
        if(x[j]>largest){
            largest=x[j]
            r=true;
            
        }
        else{
            r=false;
            break;
        }
    }
    return r
};