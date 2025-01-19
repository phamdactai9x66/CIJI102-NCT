/* eslint-disable react/prop-types */
import React from "react";

const Card = (props) => {
  const { titleCard, desCard, taskId } = props;

  return (
    <div className="card">
      <div className="titleCard">
        <span>{titleCard}</span>
        <span onClick={() => props.saveID(taskId)}>icon</span>
      </div>

      <p>{desCard}</p>
      {props.children}
      <button>MindX School</button>
    </div>
  );
};

export default Card;
