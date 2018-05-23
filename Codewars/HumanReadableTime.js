// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable(seconds) {
    // TODO

    let hours = 0;
    let minutes = 0;
    let seconds2 = 0;
    let final = "";

    minutes = Math.floor(seconds / 60);


    hours = Math.floor(minutes / 60);
    if (hours > 0) {
        minutes = minutes % 60;
    }
    if (seconds <= 59) {
        seconds2 = seconds;
    } else if (seconds > 59 && minutes > 0) {
        seconds2 = seconds % 60;
    }
    //DEBUG  
    console.log("Given", seconds);
    console.log("Minutes", minutes);
    console.log("hours", hours);
    console.log("Seconds", seconds2);

    hours = hours.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    minutes = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
    seconds2 = seconds2.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })

    final = `${hours}:${minutes}:${seconds2}`;

    //return final string
    return final;


}