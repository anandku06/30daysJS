/* Dates is an object in JS used to define dates in JS;
calculated from January 1, 1970, UTC; usually calculated in ms
Temporal is an API on which this date implementation is easily done
but in development so not in use now */

let myDate = new Date() // gives the current date and time instance
console.log(myDate); // logging this doesn't give readable info
console.log(myDate.toString()); // logging this gives the date in readable form with day, date, month, etc.
console.log(myDate.toDateString()); // logging this gives the date in day, date, month and year.
console.log(myDate.toISOString()); // returns a date as a string in ISO format
console.log(myDate.toJSON()); // same output ; like logging only myDate
console.log(myDate.toLocaleString()); // returns the date and time with format dd/mm/yyyy hh:mm:ss am/pm
console.log(myDate.toUTCString()); // Returns a date converted to a string using Universal Coordinated Time (UTC)

let anyDate = new Date(2023, 9, 23) // can be used to create custom dates by specifying year, mnth and date
console.log(anyDate.toDateString()); // 0 here is Jan ; in JS months start from 0 and goes like infinite i.e. if 12 is given then it again starts from Jan 
anyDate = new Date(2023, 0, 8, 5, 3) // time can also be given here
anyDate = new Date("2023-01-13") // can be given as yyyy-mm-dd
anyDate = new Date("01-14-2023")
console.log(anyDate.toLocaleString());

let myTimeStamp = Date.now() // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
console.log(myTimeStamp);

console.log(anyDate.getTime()); // Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

console.log(Math.floor(Date.now() / 1000)) // returns the ms time in s and floor to avoid any decimals

/* To get any specific value from Date object like day or month or year use .getMonth(), .getDay(), .getYear(), etc. */

anyDate.toLocaleString('default', {
    weekday: "long"
}) 
/* this method take arguments that are used to customise the format ; takes first the basic format, then an object in which you define any specifications for the format like weekday must be full(Monday), etc. */