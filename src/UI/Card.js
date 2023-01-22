import styled from 'styled-components';

const CardCss = styled.div`
  background-color: #e3d5ca;
  border-radius: 8px;
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.maxWidth || '750px'};
  height: ${(props) => props.height || 'auto'};
  padding: 20px;
  margin: 0 auto;
`;

const Card = (props) => {
  return <CardCss {...props}>{props.children}</CardCss>;
};

export default Card;
