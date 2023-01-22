import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import { lighten } from 'polished';

const BackDrop = styled.div`
  background-color: ${lighten(0.5, 'rgba(0,0,0,0.5)')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const ModalCard = styled(Card)`
  position: absolute;
  background-color: #edede9;
  top: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 100;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 210px;
  max-width: 300px;
`;

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <BackDrop onClick={props.onClick} />
      <ModalCard height='150px' width='50%' gap='30px' onClick={props.onClick}>
        <p>Error: Fill the {props.errorType} field.</p>
        <Button>Okay</Button>
      </ModalCard>
    </React.Fragment>
  );
};

export default ErrorModal;
