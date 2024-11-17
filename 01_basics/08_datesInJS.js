/* Dates is an object in JS used to define dates in JS;
calculated from January 1, 1970, UTC; usually calculated in ms
Temporal is an API on which this date implementation is easily done
but in development so not in use now */

let myDate = new Date()
console.log(myDate); // logging this doesn't give readable info
console.log(myDate.toString()); // logging this gives the date in readable form with day, date, month, etc.
console.log(myDate.toDateString()); // logging this gives the date in day, date, month and year.
console.log(myDate.toISOString()); // returns a date as a string in ISO format
console.log(myDate.toJSON()); // same output ; like logging only myDate
console.log(myDate.toLocaleString()); // returns the date and time with format dd/mm/yyyy hh:mm:ss am/pm
console.log(myDate.toUTCString()); // Returns a date converted to a string using Universal Coordinated Time (UTC)

