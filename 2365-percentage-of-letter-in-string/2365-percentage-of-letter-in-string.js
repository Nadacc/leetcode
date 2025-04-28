/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count=0

    let temp=s;
    while(temp.includes(letter)){
        temp=temp.replace(letter,"")
        count++;
    }


    

    let p=Math.floor(count/s.length*100)
    return p
};