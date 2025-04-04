import { Startgame } from "./components/Startgame";
import {Gameplay } from "./components/Gameplay";
import { useState } from "react"; 
import { Totalscore } from "./components/Totalscore";
import { Numberselector } from "./components/Numberselector";
import { Role } from "./components/Role";
function App() {
   const [isGameStarted,setIsGameStarted]= useState(false);
   const toggleGameplay=()=>{
    setIsGameStarted((prev)=>!prev);
   }
   return (
    <>
      {
             isGameStarted ?<Gameplay/>:<Startgame toggle={toggleGameplay}/>
      } 
      
    </>
  )
}

export default App
