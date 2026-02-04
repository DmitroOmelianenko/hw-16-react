import React, { useReducer } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

const initialState = { good: 0, neutral: 0, bad: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "good":
      return { ...state, good: state.good + 1 };
    case "neutral":
      return { ...state, neutral: state.neutral + 1 };
    case "bad":
      return { ...state, bad: state.bad + 1 };
    default:
      return state;
  }
}

function App() {
  const [feedback, dispatch] = useReducer(reducer, initialState);

  const countTotalFeedback = () => feedback.good + feedback.neutral + feedback.bad;
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={(type) => dispatch({ type })}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
