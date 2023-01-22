import Card from './UI/Card';
import Button from './UI/Button';
import React, { useState } from 'react';
import Input from './Component/Input';
import styled from 'styled-components';
import List from './Component/List';
import Chart from './Component/Chart';

const CardFlex = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    <CardFlex width='30%'>
      <Button onClick={clickHandler}>Click Me!</Button>
    </CardFlex>
  );
  if (isEditing) {
    content = (
      <CardFlex width='90%' height='300px' maxWidth='550px'>
        <Input onGet={getItemHandler} onClick={clickHandler2} />
      </CardFlex>
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
      <CardFlex width='100%'>
        {isEmpty && <div>No data founded</div>}
        {!isEmpty && <List onClick={deleteHandler} items={items} />}
      </CardFlex>
    </Div>
  );
};

export default App;
