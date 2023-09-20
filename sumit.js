const myEmojis = ["🍔", "👍", "🍔", "🍀", "🍔", "👍", "👏", "🤎", "🍀"];

const output = {};

for (let i = 0; i < myEmojis.length; i++) {
  const element = myEmojis[i];

  output[element] = (output[element] || 0) + 1;
}

console.log(output);





/// 2nd way ////



const emojis = ["🍔", "👍", "🍔", "🍀", "🍔", "👍", "👏", "🤎", "🍀"];

const counts = {};

for (let i = 0; i < emojis.length; i++) {
  const emoji = emojis[i];

  if (counts.hasOwnProperty(emoji)) {
    counts[emoji]++;
  } else {
    counts[emoji] = 1;
  }
}

console.log(counts);
