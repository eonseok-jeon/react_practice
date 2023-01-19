import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #d6ccc2;
  border-radius: 8px;
`;

const ListDetail = (props) => {
  const deleteHandler = () => {
    props.onClick(props.user.id);
  };

  return (
    <Li onClick={deleteHandler}>
      <div>{props.user.date}</div>
      <div>{props.user.title}</div>
      <div>{props.user.price}</div>
    </Li>
  );
};

export default ListDetail;
