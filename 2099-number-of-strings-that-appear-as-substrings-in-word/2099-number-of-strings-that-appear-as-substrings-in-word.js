/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count=0;
    let a=patterns.map(n => word.includes(n)).filter(n => n==true).length;
    return a;
};