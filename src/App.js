import Card from './UI/Card';
import Button from './UI/Button';
import React, { useState } from 'react';
import Input from './Component/Input';
import styled from 'styled-components';
import List from './Component/List';
import Chart from './Component/Chart';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [items, setItems] = useState([]);

  const clickHandler = () => {
    setIsEditing(true);
  };
  const clickHandler2 = () => {
    setIsEditing(false);
  };
  const getItemHandler = (title, price, date) => {
    setItems((prev) => {
      return [
        {
          title: title,
          price: +price,
          date: date,
          id: Math.random().toString(),
        },
        ...prev,
      ];
    });
  };
  const deleteHandler = (getID) => {
    setItems((prev) => prev.filter((elem) => elem.id !== getID));
  };

  let content = (
    <Card width='30%'>
      <Button onClick={clickHandler}>Click Me!</Button>
    </Card>
  );
  if (isEditing) {
    content = (
      <Card width='90%' height='300px'>
        <Input onGet={getItemHandler} onClick={clickHandler2} />
      </Card>
    );
  }
  let isEmpty = true;
  if (items.length !== 0) {
    isEmpty = false;
  }

  return (
    <Div>
      {content}
      {/* FIXME: scroll */}
      <Chart />
      <Card>
        {isEmpty && <div>No data founded</div>}
        {!isEmpty && <List onClick={deleteHandler} items={items} />}
      </Card>
    </Div>
  );
};

export default App;
