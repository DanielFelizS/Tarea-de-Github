function countChars(obj){
    var maxLength = 300;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;"> Excediste el límite de '+maxLength+' Caracteres</span>';
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' caracteres restantes';
    }
}