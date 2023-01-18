import styled from 'styled-components';

const CardCss = styled.div`
  background-color: #e3d5ca;
  border-radius: 8px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  padding: 20px;
`;

const Card = (props) => {
  return <CardCss {...props}>{props.children}</CardCss>;
};

export default Card;
