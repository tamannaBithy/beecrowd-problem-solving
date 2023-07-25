// Read a number X. Put this X at the first position of an array N [100]. In each subsequent position (1 up to 99) put half of the number inserted at the previous position, according to the example below. Print all the vector N.

// Input
// The input contains a double precision number with four decimal places.

const x = 200;

const arr = [x];

for (let i = 1; i < 100; i++) {
  // if(arr[i] / 2 )

  arr[i] = (arr[i - 1] / 2).toFixed(2);
}

console.log(arr);
