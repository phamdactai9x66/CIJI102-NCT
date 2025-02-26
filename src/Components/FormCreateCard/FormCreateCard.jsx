import React from "react";
import "./FormCreateCard.css";
import useForm from "../../hooks/useForm";

const FormCreateCard = (props) => {
  const { values, handleChange } = useForm({
    initialValues: { title: "", description: "", cars: "1" },
  });

  const handleSave = async () => {
    try {
      // const newCard = {
      //   title: title,
      //   description: description,
      //   statusId: +status,
      //   // value static
      //   taskId: +new Date().getTime(),
      //   flagId: 2, // Medium
      //   assignedTo: 1, // userId
      //   deadline: new Date("2024-04-12"),
      //   // unique id for each card
      //   id: +new Date().getTime(),
      // };
      // // POST, PUT
      // await fetch("http://localhost:3001/tasks", {
      //   method: "POST",
      //   body: JSON.stringify(newCard),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // // eslint-disable-next-line react/prop-types
      // props.handleApi && props.handleApi();
    } catch (error) {
      alert("you add new card is unsuccessfully");
    }
  };

  const handleClearValues = () => {
    // setTitle("");
    // setDescription("");
    // setStatus("1");
  };

  return (
    <div className="FormCreateCard">
      <h1>Create Card</h1>
      <div>
        <label htmlFor="fieldTitle">Title</label>
        <input
          type="text"
          id="fieldTitle"
          onChange={handleChange}
          name="title"
          value={values.title}
          placeholder="fieldTitle"
        />
      </div>

      <div>
        <label htmlFor="fieldDescription">Description</label>
        <input
          type="text"
          id="fieldDescription"
          onChange={handleChange}
          name="description"
          value={values.description}
          placeholder="fieldDescription"
        />
      </div>

      <div>
        <label htmlFor="cars">Choose a Status:</label>

        <select
          id="cars"
          onChange={handleChange}
          name="cars"
          value={values.status}
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
