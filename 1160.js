let PA = 100;
let PB = 150;
const G1 = 1.0;
const G2 = 0;

let years = 0;

while (PA <= PB) {
  PA += Math.floor((PA * G1) / 100);
  PB += Math.floor((PB * G2) / 100);
  years++;

  if (years > 100) {
    break;
  }
}

if (years <= 100) {
  console.log(years + " years.");
} else {
  console.log("Mais de 1 seculo.");
}
