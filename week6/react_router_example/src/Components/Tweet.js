import React from "react";

const Tweet = props => {
  return (
    <div>
      <p>{props.content}</p>
      <p>{props.author}</p>
    </div>
  );
};

export default Tweet;
