/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let o=[0]

    for(let i=0;i<gain.length;i++){
        for(let j=i;j<o.length;j++){
            let s=o[j]+gain[i]
            o.push(s)
            break;
        }
    }


    let m=Math.max(...o)
    return m
};