import { useEffect, useState } from 'react';
import './App.css';
import CommonButton from './components/commonButton';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setCount(10)
  },[])
 
  const handleClick2 = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

   const handleClick = () => {
      const countinc = count + 1;
      setCount(countinc);
  };

  const handleCountChange = (event) => {
    const dcount = Number(event.target.value)
    setCount(dcount)
  }
  return (
    <div>
      <h4>LEARNING REACT</h4>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick2}>-</button>
      <input onChange={handleCountChange} type='number' placeholder='enter count'/>
      <CommonButton label="External +" onClick={handleClick}/>
      <CommonButton label="External -" onClick={handleClick2}/>
      <h3>THANK YOU @</h3>
    </div>
  );
}

export default App;
