import styled from 'styled-components';
import Card from '../UI/Card';
const ListCard = styled(Card)`
  background-color: #d6ccc2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const List = (props) => {
  return <ListCard {...props}>{props.children}</ListCard>;
};

export default List;
