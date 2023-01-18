import Card from './UI/Card';
import Button from './UI/Button';
import React, { useState } from 'react';
import Input from './Component/Input';

const App = () => {
  const [korea, setKorea] = useState(true);

  const clickHandler = () => {
    setKorea(false);
  };
  const clickHandler2 = () => {
    setKorea(true);
  };

  let content = (
    <Card width='30%'>
      <Button onClick={clickHandler}>Click Me!</Button>
    </Card>
  );
  if (!korea) {
    content = (
      <Card height='300px'>
        <Input onClick={clickHandler2} />
      </Card>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default App;
