import React from "react";

const useForm = ({ initialValues = {}, validate }) => {
  const [values, setValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };

  return {
    values,
    handleChange,
  };
};

export default useForm;
