/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    
    let flag;
    let c=0;

    for(let i=0;i<words.length;i++){
        let s=words[i].split("")
        let ch=chars.split("");

        for(let j=0;j<s.length;j++){
            let index =ch.indexOf(s[j])
            if(index!==-1){
                flag=1
                ch.splice(index,1)
            }
            else{
                flag=0;
                break;
            }
        
        }
        if(flag==1){
            c+=words[i].length
            
        }
        
    }
    return c
};