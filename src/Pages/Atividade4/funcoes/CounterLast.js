import React, { useState } from 'react';

const initialCounters = [0, 0, 0]; 

export default function CounterLast() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) { 
        return c + 1;
      } else {
        return c; 
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div>
      {counters.map((count, index) => (
        <div key={index}>
          Counter {index + 1}: {count}
          <button onClick={() => handleIncrementClick(index)}>Increment</button>
        </div>
      ))}
    </div>
  );
}
