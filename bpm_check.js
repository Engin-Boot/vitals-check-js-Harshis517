function IsBPMUnderControl(bpm){
    if(bpm<70 || bpm>150){
        console.log("BPM is Critical");
        return false;
    }
    return true;
   }
module.exports=IsBPMUnderControl;
