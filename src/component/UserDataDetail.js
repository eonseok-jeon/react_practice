import classes from './UserDataDetail.module.css';
import Card from '../UI/Card';
const UserDataDetail = (props) => {
  return (
    <Card className={classes.list}>
      <li key={Math.round().toString()}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.age}>{props.age}</div>
      </li>
    </Card>
  );
};

export default UserDataDetail;
