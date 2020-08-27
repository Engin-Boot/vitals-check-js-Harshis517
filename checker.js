const expect = require('chai').expect;

function vitalsAreOk(bpm, spo2, respRate) {
    if(bpm < 70 || bpm > 150) {
        return false;
    } else if(spo2 < 90) {
        return false;
    } else if(respRate < 30 || respRate > 95) {
        return false;
    }
    return true;
}
   
    function ExpectTrue(expression) {
        if(!expression) {
            console.log('Expected true, but got false');
           
        }
    }
    function ExpectFalse(expression) {
        if(expression) {
            console.log('Expected false, but got true');
           
        }
    }
    function main() {
        ExpectTrue(vitalsAreOk(100, 95, 60));
        ExpectFalse(vitalsAreOk(40, 91, 92));
        console.log("All ok");
    }
 
main();



console.log('checker is done');
