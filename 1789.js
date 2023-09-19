const slugSpeed = [10, 10, 10, 10, 15, 18, 20, 15, 11, 10];

const getSpeed = (speed) => {
  if (speed < 10) {
    return "level 1";
  } else if (speed >= 10 && speed < 20) {
    return "level 2";
  } else {
    return "level 3";
  }
};

const maxSpeed = Math.max(...slugSpeed);

const level = getSpeed(maxSpeed);

console.log(level);







/// when there are so many array

const array = [
  [1, 20, 3],
  [4, 15, 6],
  [7, 8],
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);

  const newArr = array[i];

  const maxSpeed = Math.max(...newArr);

  const level = getSpeed(maxSpeed);

  console.log(level);
}
