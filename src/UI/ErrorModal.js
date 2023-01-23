import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';
import { lighten } from 'polished';

// TODO: make it as portal
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 250px;
  max-width: 300px;
`;

const BackDropPortal = (props) => {
  return <BackDrop onClick={props.onClick} />;
};

const Overlay = (props) => {
  return (
    <ModalCard onClick={props.onClick}>
      <p>Error: Fill the {props.errorType} field.</p>
      <Button>Okay</Button>
    </ModalCard>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDropPortal onClick={props.onClick} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay errorType={props.errorType} onClick={props.onClick} />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
