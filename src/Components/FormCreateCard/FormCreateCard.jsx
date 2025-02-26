import React from "react";
import "./FormCreateCard.css";
import useForm from "../../hooks/useForm";
import useEventListener from "../../hooks/useEventListener";

const FormCreateCard = (props) => {
  const container = React.useRef("");

  useEventListener(
    {
      event: "click",
      callBack: () => {
        container.current.style.color = "blue";
      },
    },
    () => container.current
  );

  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues: { title: "", description: "", status: "1" },
    validate: (values) => {
      let errors = {};

      for (let key in values) {
        if (key == "title") {
          // if value is empty
          if (!values[key]) {
            errors[key] = "Title is required";
          }
        }
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        console.log(values);

        const newCard = {
          title: values.title,
          description: values.description,
          statusId: +values.status,
          // value static
          taskId: +new Date().getTime(),
          flagId: 2, // Medium
          assignedTo: 1, // userId
          deadline: new Date("2024-04-12"),
          // unique id for each card
          id: +new Date().getTime(),
        };

        // POST, PUT
        await fetch("http://localhost:3001/tasks", {
          method: "POST",
          body: JSON.stringify(newCard),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // eslint-disable-next-line react/prop-types
        props.handleApi && props.handleApi();
      } catch (error) {
        alert("you add new card is unsuccessfully");
      }
    },
  });

  React.useEffect(() => {
    const callBack = () => {
      // container.current.style.color = "red";
    };
    container.current.addEventListener("click", callBack);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      container.current.removeEventListener("click", callBack);
    };
  }, []);

  const handleClearValues = () => {
    // setTitle("");
    // setDescription("");
    // setStatus("1");
  };

  return (
    <div className="FormCreateCard" ref={container}>
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

        {errors.title ? <p>{errors.title}</p> : ""}
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
        <label htmlFor="status">Choose a Status:</label>

        <select
          id="status"
          onChange={handleChange}
          name="status"
          value={values.status}
        >
          <option value="1">To Do</option>
          <option value="2">In Progress</option>
          <option value="3">In Review</option>
          <option value="4">Done</option>
        </select>
      </div>

      <div>
        <button onClick={handleSubmit}>Save</button>{" "}
        <button onClick={handleClearValues}>Clear Values</button>
      </div>
    </div>
  );
};

export default FormCreateCard;
