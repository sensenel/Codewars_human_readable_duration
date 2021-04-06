/**
 * Your task in order to complete this Kata is to write a function which formats a duration,
 * given as a number of seconds, in a human-friendly way.
 * The function must accept a non-negative integer. If it is zero, it just returns "now".
 * Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
 * 
 * It is much easier to understand with an example:
 *      formatDuration(62)    // returns "1 minute and 2 seconds"
 *      formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
 * 
 * For the purpose of this Kata, a year is 365 days and a day is 24 hours.
 * Note that spaces are important.
 */


function formatDuration (seconds) {
    
    const timeUnits = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    }
    let result = {};

    if(seconds === 0 ) { return "now"}
    else if(seconds < 0 ) {return "no valid number"}
    else if(seconds === 1) {return `${seconds} second`}
    else {
        Object.keys(timeUnits).forEach(key => {
                //console.log(timeUnits[key]);        
            result[key] = seconds / timeUnits[key];
                //console.log(result[key]);        
        }); 
    }

    for(let [key, value] of Object.entries(result)) {
        console.log(`${key}: ${value}`);
    }

    //return result;


}
  

//console.log(formatDuration(60));

console.log('\n');
console.log('now\n' + formatDuration(0));//, "1 second");
console.log('-----------------------------\n');
console.log('1 second\n' + formatDuration(1));//, "1 second");
console.log('-----------------------------\n');
console.log('1 minute and 2 seconds\n' + formatDuration(62));//, "1 minute and 2 seconds");
console.log('-----------------------------\n');
console.log('2 minutes\n' + formatDuration(120));//, "2 minutes");
console.log('-----------------------------\n');
console.log('1 hour\n'+ +formatDuration(3600));//, "1 hour");
console.log('-----------------------------\n');
console.log('1 hour, 1 minute and 2 seconds\n' + formatDuration(3662));//, "1 hour, 1 minute and 2 seconds");
console.log('\n');