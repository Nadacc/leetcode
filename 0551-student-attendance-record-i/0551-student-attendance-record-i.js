/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a=0;
    let l=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="A"){
            a++
            if(a>=2){
                return false
            }
        }
    }
    if (s.includes("LLL")){
        return false
    }
    else{
        return true
    }
};