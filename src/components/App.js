import { useState } from 'react';

import Section from './Section';
import Counter from './Counter';
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = evt => {
    switch (evt) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const positiveFeedback = () => Math.round((good * 100) / totalFeedback());

  const total = totalFeedback();

  const positive = positiveFeedback();

  return (
    <Section title="Please leave feedback">
      <Counter
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={leaveFeedback}
      />

      {total ? (
        <Statistics
          currentGood={good}
          currentNeutral={neutral}
          currentBad={bad}
          total={total}
          positivePercentage={positive}
        />
      ) : (
        <Notification msg="There is no feedback" />
      )}
    </Section>
  );
}
