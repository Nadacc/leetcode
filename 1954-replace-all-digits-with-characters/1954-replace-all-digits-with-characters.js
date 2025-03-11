/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let out=""

    for(let i=0;i<s.length;i++){
        if(i%2==0 ){
            let f=s[i];
            
            out+=f;
            
            let n=s[i+1];
            if(n==undefined){
                break;
            }
            let index=letters.indexOf(f);
            
            let j=Number(index)+Number(n);
            
            out+=letters[j]
            
            
        }
        
    }
    return out
};