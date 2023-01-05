import Card from '../UI/Card';
import UserDataDetail from './UserDataDetail';
import classes from './UserList.module.css';

const UserList = (props) => {
  const deleteClickHandler = (event) => {
    props.onClick(event);
  };

  return (
    <Card className={classes.Item}>
      <ul>
        {props.userData.map((elem) => (
          <UserDataDetail
            name={elem.name}
            age={elem.age}
            id={elem.id}
            key={elem.id}
            onClick={deleteClickHandler}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
