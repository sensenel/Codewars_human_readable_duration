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
        this.year = Math.floor(input / 31536000),
        this.day = Math.floor(((input % 31536000)) / 86400),
        this.hour = Math.floor((((input % 31536000)) % 86400)/3600),
        this.minute =  Math.floor((((input % 31536000) % 86400) % 3600) / 60),
        this.second = Math.floor((((input % 31536000) % 86400) % 3600) % 60)
        //this.input = input;
    } 
    get units() {
        return this;
    }
}
function formatDuration (seconds) {
    let result = new timeUnits(seconds), output = '';
    
    for(let [key, value] of Object.entries(result.units)) {
        if (value > 0) {
            output += value + ' ' + key + (value > 1 ? 's' : '') + ', ';
        } 
    }
    //trim and "and"
        let lastIndex = output.lastIndexOf(', ');
        output = output.substring(0, lastIndex);

    return (seconds === 0) ? 'now' : output.replace(/,([^,]*)$/," and$1");    
}

console.log('\n');
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
console.log('\n');