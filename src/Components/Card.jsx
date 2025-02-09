/* eslint-disable react/prop-types */
import React from "react";

const Card = (props) => {
  const { titleCard, desCard, taskId, handleApi } = props;

  const handleDelete = async () => {
    await fetch(`http://localhost:3001/tasks/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    handleApi && handleApi();

    alert("You delete card is successfully");
  };

  return (
    <div className="card">
      <div className="titleCard">
        <span>{titleCard}</span>
        <span onClick={() => props.saveID(props.id || taskId)}>icon</span>
        <p>
          <button onClick={handleDelete}>delete</button>
        </p>
      </div>

      <p>{desCard}</p>
      {props.children}
      <button>MindX School</button>
    </div>
  );
};

export default Card;
