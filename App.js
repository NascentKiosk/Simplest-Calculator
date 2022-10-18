import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  const plus=(e) =>{ 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  const minus=(e) => { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));

  };
 
  const multiply=(e) =>{ 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    
  }; 
 
  const divide=(e) => { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    
  };

  
 
  const resetInput=(e) =>{ 
    e.preventDefault();
    inputRef.current.value = 0;
    
  }; 
 
  const resetResult=(e) => { 
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  	
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
        
      </form> 
    </div> 
  ); 
} 
 
export default App; 
