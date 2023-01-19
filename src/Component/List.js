import styled from 'styled-components';
import ListDetail from './ListDetail';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  gap: 30px;
`;

const List = (props) => {
  return (
    <Ul>
      {props.items.map((user) => (
        <ListDetail key={user.id} user={user} onClick={props.onClick} />
      ))}
    </Ul>
  );
};

export default List;
