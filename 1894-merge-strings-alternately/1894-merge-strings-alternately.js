/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let Maxlength=Math.max(word1.length,word2.length)
    let out = "";
    for(let i=0;i<Maxlength;i++){
        if(i<word1.length){
            out+=word1[i]
        }
        if(i<word2.length){
            out+=word2[i]
        }
    }
    return out
};