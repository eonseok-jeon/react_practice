import styled from 'styled-components';
import Card from '../UI/Card';
import ChartData from './ChartData';

const ChartTitle = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ChartCard = styled(Card)`
  background-color: #f5ebe0;
`;

const Chart = () => {
  return (
    <Card>
      <ChartTitle>
        <p>Chart</p>
        <select>
          <option selected disabled>
            Year
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </ChartTitle>
      <ChartCard direction='row' gap='20px'>
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
      </ChartCard>
    </Card>
  );
};

export default Chart;
