
const alert = require('./vital_breach_alerter');
const vitaltypes = require('./vitaltypes');

function isvitalok(vitaltype, vital_value) {

    let min = vitaltypes[vitaltype][0];
    let max = vitaltypes[vitaltype][1]; 

    if(vital_value < min ){
        //console.log(vital_value);
        alert({[vitaltype]:"low"});
        return false;
    }
    if(vital_value > max){
        console.log(vital_value);
        alert({[vitaltype]: "high"});
        return false;
    }
    
    return true;
}

module.exports = isvitalok;
