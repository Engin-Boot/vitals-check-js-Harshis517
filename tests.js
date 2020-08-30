const expect = require('chai').expect;
const vitalsAreOk = require('./checker');

(function(){
    expect(vitalsAreOk({bpm: 100, spo2: 95, respRate: 70})).to.be.true;
    expect(vitalsAreOk({bpm:50, spo2:95, respRate: 70})).to.be.false;
    expect(vitalsAreOk({bpm:160, spo2:95, respRate: 70})).to.be.false;
    expect(vitalsAreOk({bpm:100, spo2:50, respRate: 70})).to.be.false;
    expect(vitalsAreOk({bpm:100, spo2:95, respRate: 25})).to.be.false;
    expect(vitalsAreOk({bpm:100, spo2:95, respRate: 100})).to.be.false;
     
    console.log('checker is done');

})();
