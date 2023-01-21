import styled from 'styled-components';
import Button from '../UI/Button';
import Card from '../UI/Card';

const ModalCard = styled(Card)`
  position: absolute;
  background-color: #edede9;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const ErrorModal = (props) => {
  return (
    <ModalCard height='150px' width='50%' gap='30px' onClick={props.onClick}>
      <p>Error: Fill the {props.errorType} field.</p>
      <Button>Okay</Button>
    </ModalCard>
  );
};

export default ErrorModal;
