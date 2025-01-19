import React from "react";
import "./FormEditCard.css";

const FormEditCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleEditCard, idCard } = props;

  const [title, setTitle] = React.useState("");

  const [description, setDescription] = React.useState("");

  const [status, setStatus] = React.useState("1");

  const handleSave = () => {
    const newCard = {
      title: title,
      description: description,
      statusId: +status,
    };

    handleEditCard(newCard, idCard);
  };

  const handleClearValues = () => {
    setTitle("");
    setDescription("");
    setStatus("1");
  };

  return (
    <div className="FormEditCard">
      <h1>Edit Card:{idCard}</h1>
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

export default FormEditCard;
