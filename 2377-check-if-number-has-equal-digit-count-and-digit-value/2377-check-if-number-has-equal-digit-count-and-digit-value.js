/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let temp=num;

    let count=0;
    let flag;

    for(let i=0;i<num.length;i++){
        while(temp.includes(i)){
            count++;
            temp=temp.replace(i,"")
            
        }
        
        
        if(num[i]==count){
            flag=true;
        }
        else{
            flag=false;
            break;
        }
        count=0;
        
    }

    if(flag==true){
        return true
    }
    else{
        return false
    }
};