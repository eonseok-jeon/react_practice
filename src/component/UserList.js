import Card from '../UI/Card';
import UserDataDetail from './UserDataDetail';
import classes from './UserList.module.css';

// TODO: make user list
const UserList = (props) => {
  return (
    <Card className={classes.Item}>
      <ul>
        {props.userData.map((elem) => (
          <UserDataDetail
            name={elem.name}
            age={elem.age}
            key={Math.random().toString()}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
