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

 class timeUnits  {
    constructor(input) {
        this.year = 31536000,
        this.day = 86400,
        this.hour = 3600,
        this.minute = 60,
        this.seconds = 1,
        this.input = input,
        this.result = {}
    }

    durationMap() {
        Object.keys(this).forEach(key => {
            this.result[key] = Math.floor(this.input / this[key]);
            for(let i of Object.entries(this.result)) {
                (this.result.year > 0 && this.result.day > 365) ?
                 this.result.day = this.result.day - 365 : 'day-error';
                 //console.log('i: ' + i);
                 
                 (this.result.day > 0 && this.result.hour > 3600) ?
                 this.result.hour = (this.result.hour - (365*24)) - 24  : 'hour-error';
                 //console.log('i: ' + i);
                 
                 (this.result.hour > 0 && this.result.minute > 60) ?
                 this.result.minute = (this.result.minute - (365*24*60)) - 60 : 'minute-error'; // kommt nicht in die Bedingung - CHECKEN!
                 //console.log('i: ' + i);
            }
        });
        delete this.result.input && delete this.result.result;
        return this.result;
    }
}

function formatDuration (seconds) {


}


let test = new timeUnits(3600); // 1j 1d 1std 1min 1sec : 31626061 

console.log(test.durationMap());


//console.log(formatDuration(60));

/* console.log('\n');
console.log('now\n' + formatDuration(0));//, "1 second");
console.log('-----------------------------\n');
console.log('1 second\n' + formatDuration(1));//, "1 second");
console.log('-----------------------------\n');
console.log('1 minute and 2 seconds\n' + formatDuration(62));//, "1 minute and 2 seconds");
console.log('-----------------------------\n');
console.log('2 minutes\n' + formatDuration(120));//, "2 minutes");
console.log('-----------------------------\n');
console.log('1 hour\n'+ formatDuration(3600));//, "1 hour");
console.log('-----------------------------\n');
console.log('1 hour, 1 minute and 2 seconds\n' + formatDuration(3662));//, "1 hour, 1 minute and 2 seconds");
console.log('\n'); */