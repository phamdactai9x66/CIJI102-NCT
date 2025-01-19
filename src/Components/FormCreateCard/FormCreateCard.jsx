import React from "react";
import "./FormCreateCard.css";

const FormCreateCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleCreateCard } = props;

  const [title, setTitle] = React.useState("");

  const [description, setDescription] = React.useState("");

  const [status, setStatus] = React.useState("1");

  const handleSave = () => {
    const newCard = {
      title: title,
      description: description,
      statusId: +status,
      // value static
      taskId: +new Date().getTime(),
      flagId: 2, // Medium
      assignedTo: 1, // userId
      deadline: new Date("2024-04-12"),
    };

    handleCreateCard(newCard);
  };

  const handleClearValues = () => {
    setTitle("");
    setDescription("");
    setStatus("1");
  };

  return (
    <div className="FormCreateCard">
      <h1>Create Card</h1>
      <div>
        <label htmlFor="fieldTitle">Title</label>
        <input
          type="text"
          id="fieldTitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="fieldTitle"
        />
      </div>

      <div>
        <label htmlFor="fieldDescription">Description</label>
        <input
          type="text"
          id="fieldDescription"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="fieldDescription"
        />
      </div>

      <div>
        <label htmlFor="cars">Choose a Status:</label>

        <select
          name="cars"
          id="cars"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="1">To Do</option>
          <option value="2">In Progress</option>
          <option value="3">In Review</option>
          <option value="4">Done</option>
        </select>
      </div>

      <div>
        <button onClick={handleSave}>Save</button>{" "}
        <button onClick={handleClearValues}>Clear Values</button>
      </div>
    </div>
  );
};

export default FormCreateCard;
