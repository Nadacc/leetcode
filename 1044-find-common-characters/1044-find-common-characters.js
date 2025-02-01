/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let s=[];
    let f=words[0]
    for(let i=0;i<f.length;i++){
        let c=f[i];
        if(words.every(w => w.includes(c))){
            s.push(c);
            words = words.map(word => word.replace(c, ""));
        }
    }
    return s;
};