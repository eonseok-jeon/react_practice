import Card from './UI/Card';
import styled from 'styled-components';
import Button from './UI/Button';

const Wrapper = styled.div`
  margin: 50px auto;
  width: 50%;
  max-width: 600px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <Wrapper>
      <Card width='90%;'>
        <Button>Hi</Button>
      </Card>
    </Wrapper>
  );
};

export default App;
