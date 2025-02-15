/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let p = [];
    for (let i=0;i<words.length;i++) {
        for (let j=0; j<words.length;j++) {
            if (i!=j && words[i].includes(words[j])) {
                p.push(words[j]);
            }
        }
    }
    p = [...new Set(p)];
    return p
};