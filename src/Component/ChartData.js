import styled from 'styled-components';

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;
const ChartBox = styled.div`
  width: 10px;
  height: 100px;
  background-color: #e3d5ca;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const InnerBox = styled(ChartBox)`
  height: 70%;
  background-color: #d5bdaf;
  transition: all 1s ease-out;
`;
const MonthText = styled.div`
  font-size: 10px;
`;

const ChartData = (props) => {
  return (
    <ChartWrapper>
      <ChartBox>
        <InnerBox />
      </ChartBox>
      <MonthText>{props.children}</MonthText>
    </ChartWrapper>
  );
};

export default ChartData;
