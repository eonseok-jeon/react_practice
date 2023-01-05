import React, { useState } from 'react';
import Card from './UI/Card';
import Input from './component/Input';
import UserList from './component/UserList';

const App = () => {
  const [userData, setUserData] = useState([]);
  const onChangeHandler = (userName, userAge) => {
    setUserData((prevData) => {
      return [
        ...prevData,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  const deleteHandler = (getID) => {
    setUserData((prevData) => {
      return prevData.filter((elem) => elem.id !== getID);
    });
  };

  return (
    <div>
      <Input onChange={onChangeHandler} />
      {userData.length === 0 && (
        <Card>
          <p style={{ textAlign: 'center' }}>No Data</p>
        </Card>
      )}
      {userData.length > 0 && (
        <UserList userData={userData} onClick={deleteHandler} />
      )}
    </div>
  );
};

export default App;
