import { useState } from "react";
import InputField from "../InputField/index";
import { useDispatch } from "react-redux";
import { CONTENT } from "../../Redux/types/types";
import { inputs } from "../../utilities/Input";
const Form = () => {
  const [values, setValues] = useState({
    title: "",
    desc: "",
  });

  const [formError, setFormError] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const dispatch = useDispatch();

  //// submitting the Form and dispatch title and desc to reducer to make it global
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(values));
    if (
      values.title !== "" &&
      values.desc !== "" &&
      values.title !== undefined &&
      values.desc !== undefined
    ) {
      dispatch({
        type: CONTENT,
        payload: values,
      });
      e.target.reset();
      setValues({});
      setFormError({});
      setFormSubmit(false);
    } else {
      setFormSubmit(true);
      return;
    }
  };

  //validating the Error fields
  const validate = (values) => {
    const error = {};
    if (!values.title) {
      error.title = "Title is Required";
    }
    if (!values.desc) {
      error.desc = "Description is Required";
    }
    return error;
  };
  //setting the Input values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.trim() });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputs.map((input, index) => {
          return (
            <div key={index}>
              <InputField
                {...input}
                value={values[input.name]}
                onChange={onChange}
                values={values}
                formSubmit={formSubmit}
              />
              <p className="text-danger">{formError[input.name]}</p>
            </div>
          );
        })}
        <button className="btn btn-medium btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
