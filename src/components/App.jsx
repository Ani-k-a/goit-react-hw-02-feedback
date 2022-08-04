import { Component } from 'react';

import Notification from './Notification/Notification';
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'

import s from './App.module.css'


export class App extends Component {

  state = {
     good: 0,
     neutral: 0,
     bad: 0,
  }

    onLeaveFeedback = e => {
    e.preventDefault();
    this.setState(prevState => ({ [e.target.name]: prevState[e.target.name] + 1 }));
    };

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    }
  
    countPositiveFeedback = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total ? Math.ceil((good / total) * 100) : 0;
    }

  render() {    

    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback();
   
    
    return (
   <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}>
          </FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          {total ? (<Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />) : (
              <Notification message="There is no feedback" />
            )}
        </Section>
        
      
   
    </div>
  )
  }
  
};
