import styled from "styled-components";
import { Totalscore } from "./Totalscore";  
import { Numberselector } from "./Numberselector";
import { Role } from "./Role";
import { useState } from "react";
import { Button,  OutlineButton  } from "../styled/Button";
import Rule from "./Rule";
export const Gameplay = () => {
  const [score, setscore]= useState(0);
  const[selectNumber, setselectedNumber]=useState();
  const[Currentdice, setCurrentdice]= useState(1);
  const[errormsg, seterrormsg]= useState("");
  const[rules, setrules]= useState("");
  const generaterandomnum =(min, max)=>{
     return Math.floor(Math.random()*(max-min)+min);
  };

  const rollDice =()=>{
    if(!selectNumber){
       seterrormsg("You have not selected any number");
      return;
    }
     seterrormsg("");
    const randomnumber =generaterandomnum(1,7);
    
    setCurrentdice((prev)=>randomnumber);
     if(selectNumber===randomnumber){
      setscore((prev)=>prev+randomnumber);
     }else{
      setscore((prev)=>prev-randomnumber);
     }
      setselectedNumber(undefined);
  }
   const resetscore=()=>{
    setscore(0);
   }
  return (
    <Container>
        <div className="flexcont">
        <Totalscore  score={score}/>
        <Numberselector  errormsg={errormsg} seterrormsg={seterrormsg} selectNumber={selectNumber} setselectedNumber={setselectedNumber}/>
      </div>
       <Role Currentdice={Currentdice} rollDice={rollDice}/> 
       <div className="bnts">
        <Button onClick={resetscore}>Reset</Button>
        <OutlineButton onClick={() => setrules((prev) => !prev)}>
          {rules ? "Hide" : "Show"} Rules
        </OutlineButton>
       </div>
     {rules && <Rule/>}
    </Container>
  );
};

const Container = styled.div`
    padding:10px;
   .flexcont{
    display: flex;
     justify-content:space-between;
    align-item:end;
    
   }
    .bnts{
     display:flex;
     gap:10px;
     flex-direction:column;
     align-items:center;
     justify-content:center;
    }
`;


