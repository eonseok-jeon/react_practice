import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './Input.module.css';

const Input = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.wrapper__head}>
      <form onSubmit={submitHandler}>
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
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default Input;
