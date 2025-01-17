/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sp=s.split(" ");
    let o="";
    for(let i=0;i<sp.length;i++){
        let rev=sp[i].split("").reverse().join("")
        o+=rev+" ";
    }
    return o.trim();
};