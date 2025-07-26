import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [star,setStar] = useState (100);
  const handleClick = () => {
    if (count < 25) {
      setCount(count +1);
    }
    if( count === 10){
      setStar(200)
    }else {
      setStar(0)
    }
  };
  const handleClick2 = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h4>LEARNING REACT</h4>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick2}>-</button>
      <p>Star : {star}</p>
      <h3>THANK YOU @</h3>
    </>
  );
}

export default App;
