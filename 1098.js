// Make a program that prints the sequence like the following example.

// Output Sample
// I=0 J=1
// I=0 J=2
// I=0 J=3
// I=0.2 J=1.2
// I=0.2 J=2.2
// I=0.2 J=3.2
// .....
// I=2 J=?
// I=2 J=?
// I=2 J=?



var i, j;

  for (i = 0; i <= 2; i += 0.2) {
    for (j = 1; j <= 3; j++) {
      if (i === 0 || i === 1 || i.toFixed(1).endsWith('0')) {
        console.log('I=' + i.toFixed(0) + ' J=' + (j + i));
      } else {
        console.log('I=' + i.toFixed(1) + ' J=' + (j + i).toFixed(1));
      }
    }
  }