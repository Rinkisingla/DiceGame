import styled from "styled-components";
import { Button } from "../styled/Button";

export const Startgame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="./src/assets/images/diceimage.png" alt="Dice" />
      </div>
      <div className="heading">
        <h1>Dice Game</h1>
        {/* <Button></Button> */}
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  height: 87vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  
  .heading {
    h1 {
      font-size: 85px;
      white-space: nowrap;
    }
  }
`;


