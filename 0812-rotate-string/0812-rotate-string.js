/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let d=s+s;
    if(s.length!=goal.length){
        return false
    }
    if(!d.includes(goal)){
        return false
    }
    else{
       return true
    }
};