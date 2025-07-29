import { useEffect, useState } from 'react';
import './App.css';
import CommonButton from './components/commonButton';
import CommonInput from './components/CommonInput';
 function App() {
//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     setCount(10)
//   },[])
 
//   const handleClick2 = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   }

//    const handleClick = () => {
//       const countinc = count + 1;
//       setCount(countinc);
//   };

//   const handleCountChange = (e) => {
//     const dcount = Number(e.target.value)
//     setCount(dcount)
//   }
//   return (
//     <div>
//       <h4>LEARNING REACT</h4>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>+</button>
//       <button onClick={handleClick2}>-</button>
//       <input onChange={handleCountChange} type='number' value={count} placeholder='enter count'/>
//       <CommonButton label="External +" onClick={handleClick}/>
//       <CommonButton label="External -" onClick={handleClick2}/>
//       <h3>THANK YOU @</h3>
//     </div>
//   );

const [email,setEmail] = useState("");
const [username,setUsername] = useState("");

const handleEmailChange = (e) =>{
  setEmail(e.target.value);
}

const handleUsernameChange = (e) =>{
  setEmail(e.target.value);
}
 console.log(email);
 const handleButtonClick = () => {

 }
 return(
 <div>
<CommonInput
type={"text"} placeHolder={"enter your Username"} value={username} onChange={handleUsernameChange}
/>

<CommonInput
type={"email"} placeHolder={"enter your Email"} value={email} onChange={handleEmailChange}
/>

<CommonButton onClick={handleButtonClick} label='Submit'/>
 </div>)
}

export default App;
