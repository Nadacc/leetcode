/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let d=[];
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
            d.push(arr[i]);
        }
    }
    if(d.length>=k){
        return d[k-1]
    }
    else{
        return "";
    }
};