import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import './App.css';
// import run from 'nodemon/lib/monitor/run';
function Timer_display(){
  
  const [second, setSecond] = useState(0)
  const [running, setRunning] = useState(false)

  function pressedStartStop (){
    setRunning(!running)
  }
  function pressedReset(){
    setRunning(false)
    setSecond(0)
  }
  useEffect(()=>{
    if(running){
      const interval = setInterval(() => {setSecond(second+1)},1000)
      return ()=>clearInterval(interval)
    }
  },[running, second])
  return (
    <>
      <h1>{Math.floor(second / 3600).toString().padStart(2,"0")}:{Math.floor(second / 60 %60).toString().padStart(2,"0")}:{(second%60).toString().padStart(2,"0")}</h1>
      <button onClick={pressedStartStop}>{running?"Stop":"Start"}</button>      
      <button onClick={pressedReset}>Reset</button>

    </>
    
  )
      
}
function App() {
  return (
    <div className="App">
        <Timer_display/>
    </div>
  );
}

export default App;
