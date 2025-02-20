/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let temp="";
    for(let i=0;i<indices.length;i++){
        for(let j=0;j<indices.length;j++){
            if(indices[j]==i){
                temp+=s[j]
            }
            
        }
        
    }
    return temp
};