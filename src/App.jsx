import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); 
  };

  return (
    <>
      <h4>LEARNING REACT</h4>
      <p>Count: {count}</p> 
      <button onClick={handleClick}>Click me</button>
      <h3>THANK YOU @</h3>
    </>
  );
}

export default App;
