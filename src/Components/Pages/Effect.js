import React, { Component, useState, useEffect } from 'react';
import './Effect.css';


function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log(count)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button  className="btn2"  onClick={incrementCount}>Click me</button>
    </div>
  )
}

export default Counter;
