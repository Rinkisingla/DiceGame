import styled from "styled-components";

export const Totalscore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

const ScoreContainer = styled.div`
 max-width: 135px;
  text-align: center;
  h1 {
    font-size: 76px;
    line-height: 87px;
    margin:0px;

  }
  p {
    font-size: 24px;
    font-weight: 500; 
    margin:0px;
    padding:0px;
  }
`;
