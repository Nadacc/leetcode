/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let f=s1.split(" ")
    let se=s2.split(" ")
    let c=f.concat(se)
    
    let uncommon=[];
    for(let i=0;i<c.length;i++){
        if(c.indexOf(c[i]) == c.lastIndexOf(c[i])){
            uncommon.push(c[i])
        }
    }
    return uncommon

};