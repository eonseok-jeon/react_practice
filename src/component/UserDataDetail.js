import classes from './UserDataDetail.module.css';
import Card from '../UI/Card';
const UserDataDetail = (props) => {
  const deleteClickHandler3 = () => {
    props.onClick(props.id);
  };
  return (
    <Card className={classes.list}>
      <li onClick={deleteClickHandler3}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.age}>{props.age}</div>
        <div className={classes.age}>{props.id}</div>
      </li>
    </Card>
  );
};

export default UserDataDetail;
