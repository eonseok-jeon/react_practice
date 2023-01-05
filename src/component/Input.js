import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Input.module.css';

const Input = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    if (!userName) {
      setInValidName(true);
    }
    if (!userAge) {
      setInValidAge(true);
    } else if (userName && userAge) {
      props.onChange(userName, userAge);
      setUserName('');
      setUserAge('');
    }
  };

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
    setInValidName('');
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
    setInValidAge('');
  };
  const [inValidName, setInValidName] = useState(false);
  const [inValidAge, setInValidAge] = useState(false);

  return (
    // TODO: cancel
    <Card className={classes.wrapper__head}>
      <form onSubmit={submitHandler}>
        <div className={classes.head__inputs}>
          {/* TODO: delete repeat (extra study) */}
          <div
            className={`${classes.head__input} ${
              inValidName && classes.inValidName
            }`}
          >
            <label htmlFor='userName'>User Name</label>
            <input
              value={userName}
              id='userName'
              type='text'
              // required
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div
            className={`${classes.head__input} ${
              inValidAge && classes.inValidAge
            }`}
          >
            <label htmlFor='userAge'>User Age</label>
            <input
              value={userAge}
              id='userAge'
              type='number'
              min='0'
              // required
              onChange={ageChangeHandler}
            ></input>
          </div>
        </div>
        <Button className={classes.button_detail} type='submit'>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default Input;
