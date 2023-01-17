import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 12px;
  width: ${(props) => props.width};
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
