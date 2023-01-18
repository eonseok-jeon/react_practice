import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Form = styled.form`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 30px;
  margin-left: 300px;
`;

const Input = (props) => {
  const submitHandler = () => {
    props.onClick();
  };
  return (
    <React.Fragment>
      <Form onSubmit={submitHandler}>
        <Div>
          <label for='title'>Title</label>
          <input
            id='title'
            type='text'
            placeholder='Fill the title.'
            required
          />
        </Div>
        <Div>
          <label for='price'>Price</label>
          <input
            id='price'
            type='number'
            placeholder='Fill the price'
            min='0'
            required
          />
        </Div>
        <Div>
          <label for='date'>Date</label>
          <input id='date' type='date' min='1998-11-02' required />
        </Div>
      </Form>
      <DDiv>
        <Button onClick={props.onClick}>Cancel</Button>
        <Button onClick={submitHandler}>Add</Button>
      </DDiv>
    </React.Fragment>
  );
};

export default Input;
