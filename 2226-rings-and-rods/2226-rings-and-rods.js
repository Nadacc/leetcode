/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let count=0;
    for(let i=0;i<rings.length;i++){
        if(rings.includes(`B${i}`) && rings.includes(`R${i}`) && rings.includes(`G${i}`)){
            count++;
        }
    }
    return count
};