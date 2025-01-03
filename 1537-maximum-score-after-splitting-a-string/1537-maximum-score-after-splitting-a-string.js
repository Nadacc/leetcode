/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    
    let left="";
    let right="";
    let zero=0
    let one=0;
    let tot=[];
    for(let i=0;i<s.length-1;i++){
        left+=s[i]
        
        for(let j=i+1;j<s.length;j++){
            right+=s[j];
        }
        
        for(let k=0;k<left.length;k++){
            if(left[k]==0){
                zero++;
            }
        }
        
        for(let k=0;k<right.length;k++){
            if(right[k]==1){
                one++;
            }
        }
        
        let score=zero+one;
        
        tot.push(score);
        
        right="";
        zero=0;
        one=0;
    }
    let largest=Math.max(...tot);
    return largest
    
    
   
    
};