import Card from './UI/Card';
import Button from './UI/Button';
import React, { useState } from 'react';
import Input from './Component/Input';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ScrollCard = styled(Card)`
  height: 40vh;
`;
const DDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100px;
  overflow: auto;
`;
const DDDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #d6ccc2;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
  list-style: none;
  gap: 30px;
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
    // console.log(event);
    setItems((prev) => {
      return [...prev, { title: title, price: price, date: date }];
    });
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

  return (
    <Div>
      {content}
      <ScrollCard>
        <div>No data founded</div>
        <Card>
          <Ul>
            {items.map((user) => {
              console.log(items);
              return (
                <DDDiv>
                  <li>{user.title}</li>
                  <li>{user.price}</li>
                  <li>{user.date}</li>
                </DDDiv>
              );
            })}
          </Ul>
        </Card>
      </ScrollCard>

      <DDiv>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </DDiv>
    </Div>
  );
};

export default App;
