import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Inputs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
`;
const Buttons = styled.div`
  /* display: flex;
  gap: 30px;
  justify-content: flex-end; */
  text-align: right;
  & Button:last-child {
    margin-left: 20px;
  }
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
    <Form onSubmit={submitHandler}>
      <Inputs>
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
      </Inputs>
      <Buttons>
        <Button onClick={props.onClick}>Cancel</Button>
        <Button type='submit' onClick={submitHandler}>
          Add
        </Button>
      </Buttons>
    </Form>
  );
};

export default Input;
