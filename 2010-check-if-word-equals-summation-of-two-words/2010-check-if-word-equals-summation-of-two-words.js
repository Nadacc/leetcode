/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let letters="abcdefghijklmnopqrstuvwxyz";
    let f="";
    let s="";
    let t="";
    for(let i=0;i<firstWord.length;i++){
        let ind = letters.indexOf(firstWord[i])
        f+=ind;
    }


    for(let i=0;i<secondWord.length;i++){
        let ind = letters.indexOf(secondWord[i])
        s+=ind;
    }

    let sum=Number(f)+Number(s);

    for(let i=0;i<targetWord.length;i++){
        let ind = letters.indexOf(targetWord[i])
        t+=ind;
    }
    if(sum==t){
        return true
    }
    else{
        return false
    }
};