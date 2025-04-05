/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    
        let a;
        let z="";
        let result=0;
        for(let i=0;i<spaces.length;i++){
            a=s.slice(result,spaces[i]);
            z+=a+" " 
            result=spaces[i]
        } 
        z+=s.slice(result)
        return z
};