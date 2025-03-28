/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count=0;
    for(let i=0;i<words1.length;i++){
        if(words1.indexOf(words1[i])==words1.lastIndexOf(words1[i])){
            if(words2.indexOf(words1[i])==words2.lastIndexOf(words1[i]) && words2.includes(words1[i])){
                    count++;
                }    
        }    
    }
    return count
};