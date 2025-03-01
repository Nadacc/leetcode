/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) return false; 
    if(s1===s2)return true
    let s = s1.split(""); 
    let r = s2.split(""); 
    
    for (let i = 0; i < r.length; i++) {
        for (let j = i + 1; j < r.length; j++) {
            
            let temp = r[i];
            r[i] = r[j];
            r[j] = temp;
            
            
            if (r.join("") === s1) {
                return true;
            }
            
            
            r[j] = r[i];
            r[i] = temp;
        }
    }
    
    return false;
};