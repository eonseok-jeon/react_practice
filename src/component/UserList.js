import classes from './UserList.module.css';

// TODO: make user list
const UserList = (props) => {
  return (
    <ul>
      {props.userData.map((elem) => (
        <li>
          <div>{elem.name}</div>
          <div>{elem.age}</div>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
