/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.toUpperCase()==word){
       return true
    }
    else if(word.toLowerCase()==word){
        return true
    }
    else if (word.charAt(0) === word.charAt(0).toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()){
        return true
    }
    else{
        return false
    }   
};