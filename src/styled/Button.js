 import styled from"styled-components";
export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border: none;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  color: black;
  background: transparent;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;