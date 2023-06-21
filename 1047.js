// Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,

// Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.

// Input
// Four integer numbers representing the start and end time of the game.

// Output
// Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.

const startHour = 7;
const startMinute = 10;
const endHour = 7;
const endMinute = 9;

const totalStartHour = startHour * 60 + startMinute;
const totalEndHour = endHour * 60 + endMinute;

let minuteGap = totalEndHour - totalStartHour;

if (minuteGap <= 0) {
    minuteGap += 1440;
}

const finalHour = Math.floor(minuteGap / 60)
const finalMinute = minuteGap % 60;

console.log(finalHour);
console.log(finalMinute);