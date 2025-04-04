/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let l=sentences.map(n => n.split(" ").length)
    return(Math.max(...l))
};