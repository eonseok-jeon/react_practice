import styled from 'styled-components';
import { darken, lighten } from 'polished';

const ButtonCss = styled.button`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: 10px 15px;
  background-color: #d6ccc2;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: ${lighten(0.05, '#d6ccc2')};
  }
  &:active {
    background-color: ${darken(0.05, '#d6ccc2')};
  }
`;

const Button = (props) => {
  return (
    <ButtonCss {...props} onClick={props.onClick}>
      {props.children}
    </ButtonCss>
  );
};

export default Button;
