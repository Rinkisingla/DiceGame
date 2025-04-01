import styled from "styled-components";
 import { useState } from "react";

export const Numberselector = ({ errormsg,  seterrormsg , selectNumber, setselectedNumber}) => {
    const arraynum =[1,2,3,4,5,6];
    const setnumberHandler=(value)=>{
      setselectedNumber(value);
      seterrormsg("");
    }
    
     
  return (
    <Numberselectorcontainer>
      <p className="error">{errormsg}</p>
    <div className="flex">
       { arraynum.map((value, i)=>(
             <Box  isSelected ={ value === selectNumber} key ={i} onClick={()=>setnumberHandler(value)}>
               {value}
            </Box>
       ))
        }
    </div>
    <p>Select Number</p>
    </Numberselectorcontainer>
  )
}
 const Numberselectorcontainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items:end;
    .error{
     color:red;
     line-height:10px;
    }
   .flex{
    display:flex;
    gap: 24px;
    margin-top:20px;
   }
 
  p{
    font-size: 20px;
    font-weight: 500;
  }
    `;
 const Box = styled.div`
     height: 72px;
     width:72px;
     border:1px solid black;
      display:grid;
      place-items:center;
      font-size:24px;
      font-weight:700;
       background-color: ${(props)=>(props.isSelected ? "black":"white")};
       color: ${(props)=>(!props.isSelected ? "black":"white")};
 `;

 
