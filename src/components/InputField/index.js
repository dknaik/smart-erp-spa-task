import styles from "./Input.module.scss";

const InputField = ({ ...props }) => {
  const {
    label,
    errorMessage,
    onChange,
    value,
    fieldType,
    values,
    type,
    formSubmit,
    ...rest
  } = props;
  return (
    <div className="form-group w-100 ">
      <label className="text-white text-capitalize fs-5 font-weight-bold">
        {label}
      </label>
      <div className="input-group mb-3">
        {fieldType === "search" ? (
          <input
            className={`form-control ${styles.searchInput}`}
            {...rest}
            value={value}
            onChange={onChange}
          ></input>
        ) : type === "textarea" ? (
          <textarea
            style={{ border: !values.desc && formSubmit && "1px solid red" }}
            className="form-control"
            {...rest}
            onChange={onChange}
          ></textarea>
        ) : (
          <input
            style={{ border: !values.title && formSubmit && "1px solid red" }}
            className="form-control"
            {...rest}
            onChange={onChange}
          ></input>
        )}
      </div>
    </div>
  );
};

export default InputField;
