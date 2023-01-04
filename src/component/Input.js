import classes from './Input.module.css';

const Input = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className={classes.wrapper__head} onSubmit={submitHandler}>
        <div className={classes.head__inputs}>
          <div className={classes.head__input}>
            <label for='userName'>User Name</label>
            <input id='userName' type='text'></input>
          </div>
          <div className={classes.head__input}>
            <label for='userAge'>User Age</label>
            <input id='userAge' type='number' min='0'></input>
          </div>
        </div>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Input;
