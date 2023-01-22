import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
`;
const ForData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const InputData = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;
`;
const Buttons = styled.div`
  text-align: right;
  & Button:last-child {
    margin-left: 20px;
  }
`;
const InputBox = styled.input`
  background-color: ${(props) => (props.invalid ? 'red' : '#edede9')};
  padding: 4px;
  border-radius: 4px;
  border: none;
  width: 100%;
`;

const Input = (props) => {
  const [error, setError] = useState(false);
  const titleInputRef = useRef(() => {
    setInValid(true);
  });
  const priceInputRef = useRef();
  const dateInputRef = useRef();
  const [inValid, setInValid] = useState(false);

  const submitHandler = (event) => {
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (
      enteredTitle.trim().length > 0 &&
      enteredPrice.trim().length > 0 &&
      enteredDate.trim().length > 0
    ) {
      event.preventDefault();
      setInValid(false);
      props.onGet(enteredTitle, enteredPrice, enteredDate);

      titleInputRef.current.value = '';
      priceInputRef.current.value = '';
      dateInputRef.current.value = '';
    } else if (enteredTitle.trim().length === 0) {
      setError('Title');
    } else if (enteredPrice <= 0) {
      setError('Price');
    } else if (enteredDate.trim().length === 0) {
      setError('Date');
    }
  };
  const errorHandler = () => {
    setError(false);
  };

  return (
    // TODO: invalid input with red box
    <React.Fragment>
      {error && <ErrorModal errorType={error} onClick={errorHandler} />}

      <Form onSubmit={submitHandler}>
        <InputData type='submit'>
          <ForData type='submit'>
            <label htmlFor='title'>Title</label>
            <InputBox
              id='title'
              type='text'
              placeholder='Fill the title.'
              ref={titleInputRef}
              invalid={inValid}
              required
            />
          </ForData>
          <ForData>
            <label htmlFor='price'>Price</label>
            <InputBox
              id='price'
              type='number'
              placeholder='Fill the price'
              min='0'
              ref={priceInputRef}
              invalid={inValid}
              required
            />
          </ForData>
          <ForData>
            <label htmlFor='date'>Date</label>
            <InputBox
              id='date'
              type='date'
              min='1998-11-02'
              ref={dateInputRef}
              invalid={inValid}
              required
            />
          </ForData>
        </InputData>
        <Buttons>
          <Button onClick={props.onClick}>Cancel</Button>
          <Button type='submit' onClick={submitHandler}>
            Add
          </Button>
        </Buttons>
      </Form>
    </React.Fragment>
  );
};

export default Input;
