// Input
// The input consists of a single integer N (0 < N ≤ 106) representing how many "Ho" will be spoken by Santa.

// Output
// The output consists of all "Ho" that Santa should speak separated by a space. After the last "Ho" you must present an "!" ending the program.

const n = 5;
let value = "";

for (let i = 1; i <= n; i++) {
  if (i === n) {
    value += "ho" + "!";
  } else {
    value += "ho" + " ";
  }
}

console.log(value);

//// 2nd way ///////

const laughter = "Ho";
let result = laughter;

for (let i = 1; i < n; i++) {
  result += " " + laughter;
}

console.log(result + "!");
