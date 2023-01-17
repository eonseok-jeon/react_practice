import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 0 20px (0, 0, 0, 0.5);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Card;
