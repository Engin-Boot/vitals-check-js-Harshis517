function IsSPO2UnderControl(spo2){
    if(spo2<90){
        console.log("Low SPO2");
        return false;
    }
    return true;
}
module.exports=IsSPO2UnderControl;
© 2020 GitHub, Inc.
