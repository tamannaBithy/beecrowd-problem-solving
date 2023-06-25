// Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.

// You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.

// Input
// The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.

const startDate = new Date("2022, 4, 5, 08:12:23");
const endDate = new Date("2022, 4, 9, 06:13:23");

let duration = (endDate.getTime() - startDate.getTime()) / 1000;

const days = Math.floor(duration / (24 * 60 * 60));
duration %= 24 * 60 * 60;

const hours = Math.floor(duration / (60 * 60));
duration %= 60 * 60;

const minutes = Math.floor(duration / 60);
const seconds = Math.floor(duration % 60);

console.log(days + " dia(s)");
console.log(hours + " hora(s)");
console.log(minutes + " minuto(s)");
console.log(seconds + " segundo(s)");


// year & month does not matter in new date().
