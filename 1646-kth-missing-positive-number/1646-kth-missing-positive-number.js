/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let nm=0;
    let m=0;

    for(let i=1;m!=k;i++){
        if(arr.includes(i)){
            nm++;
        }
        else{
            m++;
        }
        if(m==k){
            return i
        }
    }
};