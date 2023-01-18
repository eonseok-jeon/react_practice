import Card from './UI/Card';
import Button from './UI/Button';
import styled from 'styled-components';

const ForFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const App = () => {
  return (
    <Card height='200px'>
      <ForFlex>
        <Button>Click Me!</Button>
      </ForFlex>
    </Card>
  );
};

export default App;
