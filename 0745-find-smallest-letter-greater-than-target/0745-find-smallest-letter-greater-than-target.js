/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let found=false;
    for(let i=0;i<letters.length;i++){
        if(letters[i]>target){
            found=true;
            return letters[i]
            break
        }
   
    }
    if(!found){
        return letters[0]
    }
};