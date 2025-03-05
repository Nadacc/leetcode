/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';

    return [...letters].every(char => sentence.includes(char))

};