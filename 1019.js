// Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

// Input
// The input file contains an integer N.


let value = 556;

const timer = [3600, 60]

let timeFormat = []

for (const time of timer) {
    const newTime = Math.floor(value / time)
    value -= time * newTime;
    timeFormat.push(newTime);
}

console.log(`${timeFormat[0]} : ${timeFormat[1]} : ${value}`);



//// 2nd way ///


const durationInSeconds = 556

// Calculate the hours, minutes, and remaining seconds
const hours = Math.floor(durationInSeconds / 3600);
const minutes = Math.floor((durationInSeconds % 3600) / 60);
const seconds = durationInSeconds % 60;

// Output the duration in the format HH:MM:SS
console.log(`${hours}:${minutes}:${seconds}`);
