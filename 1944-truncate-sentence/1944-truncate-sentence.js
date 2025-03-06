/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let out=[];

    s=s.split(" ")
    

    for(let i=0;i<k;i++){
        out.push(s[i])
    }
    out=out.join(" ")
    return out
};