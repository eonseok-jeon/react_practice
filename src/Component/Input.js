import React, { useRef } from 'react';
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
  margin-top: 10px;
  margin-left: 250px;
`;

const Input = (props) => {
  const titleInputRef = useRef();
  const priceInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    props.onGet(enteredTitle, enteredPrice, enteredDate);

    titleInputRef.current.value = '';
    priceInputRef.current.value = '';
    dateInputRef.current.value = '';
  };
  return (
    <React.Fragment>
      <Form onSubmit={submitHandler}>
        <Div>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            placeholder='Fill the title.'
            ref={titleInputRef}
            required
          />
        </Div>
        <Div>
          <label htmlFor='price'>Price</label>
          <input
            id='price'
            type='number'
            placeholder='Fill the price'
            min='0'
            ref={priceInputRef}
            required
          />
        </Div>
        <Div>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            min='1998-11-02'
            ref={dateInputRef}
            required
          />
        </Div>
      </Form>
      <DDiv>
        <Button onClick={props.onClick}>Cancel</Button>
        <Button type='submit' onClick={submitHandler}>
          Add
        </Button>
      </DDiv>
    </React.Fragment>
  );
};

export default Input;
