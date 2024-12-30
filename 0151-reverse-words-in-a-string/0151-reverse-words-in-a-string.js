/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let t=s.trim();
    let sp=t.split(/\s+/);
    
    let rev=sp.reverse();
    let out=rev.join(" ");
    return out;
    
};