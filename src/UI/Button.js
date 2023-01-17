import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 4px;
  cursor: pointer;
  padding: 7px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
