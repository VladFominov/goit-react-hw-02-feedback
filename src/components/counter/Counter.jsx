import React from 'react';
import { Container} from './Counter.styled';
import FeedbackOptions from '../Btn/Btns';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.ceil((good / total) * 100);
  };

  handleIncrement = e => {
    const {
      target: { name },
    } = e;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  render() {
    return (
      <Container>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {this.countTotalFeedback() ? 
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
         : 
          <Notification />
        }
        
      </Container>
    );
  }
}

export default Counter;
