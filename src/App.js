import React, { useState } from 'react';
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
  return (
    <div>
      <Input onChange={onChangeHandler} />
      <UserList userData={userData} />
    </div>
  );
};

export default App;
