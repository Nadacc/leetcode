/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let m="";
    for(let i=0;i<s.length;i++){
        if(!m.includes(s[i])){
            m+=s[i]
        }
        else{
            return(s[i])
            break;
        }
    }
};