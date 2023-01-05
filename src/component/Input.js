import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Input.module.css';

const Input = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onChange(userName, userAge);
    setUserName('');
    setUserAge('');
  };

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card className={classes.wrapper__head}>
      <form onSubmit={submitHandler}>
        <div className={classes.head__inputs}>
          <div className={classes.head__input}>
            <label htmlFor='userName'>User Name</label>
            <input
              value={userName}
              id='userName'
              type='text'
              onChange={nameChangeHandler}
              required
            ></input>
          </div>
          <div className={classes.head__input}>
            <label htmlFor='userAge'>User Age</label>
            <input
              value={userAge}
              id='userAge'
              type='number'
              min='0'
              required
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
