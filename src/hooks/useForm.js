import React from "react";

const useForm = ({ initialValues = {}, validate, onSubmit }) => {
  const [values, setValues] = React.useState(initialValues);

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };

  const isValidate = () => {
    const validateErrors = validate ? validate(values) : {};

    setErrors(validateErrors);

    return Object.values(validateErrors).length == 0;
  };

  const handleSubmit = () => {
    if (isValidate()) {
      // handle api request
      onSubmit && onSubmit(values);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
