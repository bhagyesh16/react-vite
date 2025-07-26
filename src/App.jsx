import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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
    </>
  );
}

export default App;
