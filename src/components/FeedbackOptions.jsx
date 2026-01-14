import React from "react";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{ marginRight: "10px" }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
