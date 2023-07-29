// Brazil is the country hosting the world cup this year. However, there are many people protesting against the government. In social networks you can see people saying the world cup will not happen.

// But these rumors that there will be no world cup are totally false, president Dilma Rousseff has warned: the world cup will happen, and if someone complains about it, we will host again!

// Input
// The input contains several test cases and ends with EOF. Each test case consists of a line containing a number N of complaints about the world cup forwarded to the president (0 ≤ N ≤ 100).

const arr = [0, 1, 0, 2, 100, 0, "-0f", 8];

for (let i = 0; i < arr.length; i++) {
  if (isNaN(arr[i])) break; /// eof(end of file) checking

  if (arr[i] === 0) {
    console.log("vai ter copa!");
  } else {
    console.log(arr[i], "vai ter duas!");
  }
}
