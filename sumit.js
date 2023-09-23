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

// Closures

// A closure is a function that retains access to variables from its containing (enclosing) function's scope, even after the containing function has finished executing.

function father() {
  let name = "Ali";

  return function son() {
    console.log(name);
  };
}

father()();

// Certainly! Closures are frequently used in React.js applications, often in scenarios where functions need to access variables from their enclosing scopes, such as in event handling and asynchronous operations. Here's a real-life example of how closures can be used in a React.js app:

// Example: Counter Component

// Let's consider a simple Counter component that increments a count value when a button is clicked. We'll use closures to maintain the state of the count.

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default Counter;
// In this example, the useState hook is used to create a state variable count and its corresponding updater function setCount. The increment function is defined inside the Counter component and uses the setCount function to update the count state.

// Here's how closures are involved:

// The increment function is created within the scope of the Counter component. This means it has access to the count state variable and the setCount function due to closures.

// When the button is clicked and the increment function is called, it's still able to access the count state variable even though it's outside the function where count was originally declared.

// This works because closures allow the increment function to "remember" the variables from its enclosing scope, ensuring that it always has access to the most up-to-date values of count and setCount.

// So, every time the button is clicked, the increment function accesses the count state variable through closures and updates it accordingly.

// In this way, closures play a crucial role in React by enabling functions to access and manipulate state and props even when they are executed in different contexts.
