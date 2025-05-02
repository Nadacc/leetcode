/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let k="abcdefghijklmnopqrstuvwxyz";
    let keys=key.replaceAll(" ","")

    let d="";
    for(let i=0;i<keys.length;i++){
        if(!d.includes(keys[i])){
            d+=keys[i]
        }
    }

    let out="";

    for(let i=0;i<message.length;i++){
        if(message[i]==" "){
            out+=" ";
        }
        else{
            let ind=d.indexOf(message[i]);
            out+=k[ind]
        }
        
    }
    return out
};