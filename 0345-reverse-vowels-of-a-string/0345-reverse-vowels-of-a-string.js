/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let v="aeiouAEIOU";
        let u="";
        let index=[];
        for(i=0;i<s.length;i++){
            if(v.includes(s[i])){
                index.push(i);
                
                
                u+=s[i];
            }
            
        }



        
        
        let r=u.split("").reverse().join("");
        
        let sp=s.split("");

        for(i=0;i<index.length;i++){
            sp[index[i]]=r[i];
            
        }
        let j=sp.join("");
        return j;
};