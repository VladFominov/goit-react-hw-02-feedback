import {StatContainer} from './Statistics.styled'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    return (
      <StatContainer>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
      </StatContainer>
    );
};
export default Statistics;