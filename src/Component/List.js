import styled from 'styled-components';
import ListDetail from './ListDetail';

const Ul = styled.ul`
  scroll-padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 150px;
  list-style: none;
  gap: 20px;
`;
const PP = styled.p`
  margin-top: -20px;
`;

const List = (props) => {
  return (
    <Ul>
      {props.items.map((user) => (
        <ListDetail key={user.id} user={user} onClick={props.onClick} />
      ))}
      <PP>&nbsp;</PP>
    </Ul>
  );
};

export default List;
