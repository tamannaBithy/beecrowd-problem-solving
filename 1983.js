// Input
// The file first contains the number of students (3 <= n <= 100) and then the n students bearing the registration number (0 < m < 1000000) each, followed by the note (0 <= note <= 10.0, with 1 decimal place).

// Obs .: the notes will not be repeated. In other words, has no chance to have two students with the same note.

// Output
// You must print the student's registration number with the highest score or "Minimum note not reached" (without quotes) if no student has taken greater note than or equal to 8.

const studentData = [
  {
    reg: 1000,
    note: 5,
  },
  {
    reg: 1001,
    note: 10,
  },
  {
    reg: 1002,
    note: 6,
  },
];

let maxScore = 0;
let studentWithMaxScore = null;

for (let i = 0; i < studentData.length; i++) {
  const regNum = studentData[i].reg;
  const noteNum = studentData[i].note;

  if (noteNum >= 8 && noteNum >= maxScore) {
    maxScore = noteNum;
    studentWithMaxScore = regNum;
  }
}

if (studentWithMaxScore !== null) {
  console.log(studentWithMaxScore);
} else {
  console.log("Minimum note not reached");
}
