
import styled from "styled-components";
 import { useState } from "react";
export const Role = ({rollDice, Currentdice}) => {
  return (
    <>
     <Roledice>
      <div className="dice" onClick={rollDice}>
     <img src={`/assets/images/dice/dice_${Currentdice}.png`} alt="Dice" />
     </div>
     <p> Click on dice to role</p>
     </Roledice>
     
    </>
  )
}
const Roledice= styled.div`
 .dice{
 cursor:pointer;
 }
 margin-top:48px;
 display:flex;
 align-items:center;
 flex-direction:column;
`;
