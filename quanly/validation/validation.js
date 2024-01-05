function checkEmptyValue(value,errorId){
    if (value){
        document.getElementById(errorId).innerHTML=''
        return true;
    }
    else
    {
        document.getElementById(errorId).innerHTML= 'vui lòng không bỏ trống'
        return false
    }


}


