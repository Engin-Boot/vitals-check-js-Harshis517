function IsRespirationOk(respRate){
    if(respRate<30 || respRate>95){
        console.log("respRate is critical");
        return false;
    }
    
    return true;
}
module.exports=IsRespirationOk;
© 2020 GitHub, Inc.
