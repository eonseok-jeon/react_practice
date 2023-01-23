import styled from 'styled-components';
import Card from '../UI/Card';
import ChartData from './ChartData';

const CardFlex = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 95%;
  max-width: 650px;
`;
const ChartTitle = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ChartCard = styled(Card)`
  background-color: #f5ebe0;
  overflow: auto;
  display: flex;
`;
const ScrollDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Chart = () => {
  return (
    <CardFlex>
      <ChartTitle>
        <p>Chart</p>
        <select>
          <option value='year' selected disabled>
            Year
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </ChartTitle>
      <ChartCard>
        <ScrollDiv>
          <ChartData>Jan</ChartData>
          <ChartData>Feb</ChartData>
          <ChartData>Mar</ChartData>
          <ChartData>Apr</ChartData>
          <ChartData>May</ChartData>
          <ChartData>Jun</ChartData>
          <ChartData>Jul</ChartData>
          <ChartData>Aug</ChartData>
          <ChartData>Sep</ChartData>
          <ChartData>Oct</ChartData>
          <ChartData>Nov</ChartData>
          <ChartData>Dec</ChartData>
        </ScrollDiv>
      </ChartCard>
    </CardFlex>
  );
};

export default Chart;
