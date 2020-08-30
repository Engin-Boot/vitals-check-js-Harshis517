const staff_json = require('./staff_alert.json');

staff_json.alarm_system; //{put an url to run alarm}


//...Alerting concerned doctor..//

function alert(alertvitaltype){
    let vitaltype = Object.keys(alertvitaltype)[0];
    //console.log(vitaltype + " is " + alertvitaltype[vitaltype] + " call " + staff_json[vitaltype]);
}

module.exports = alert;
