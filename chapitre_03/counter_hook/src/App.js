import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count1} times and You clicked ${count2} times`;
  });
  return (
    <div className="App">
    <Counter 
      count = {count1}
      addFunction= {() => setCount1(count1 + 1)} 
      subtractFunction={() => setCount1(count1 - 1)} 
      />
      <Counter 
      count = {count2}
      addFunction= {() => setCount2(count2 + 1)} 
      subtractFunction={() => setCount2(count2 - 1)} 
      />
    </div>
  );
}

export default App;
