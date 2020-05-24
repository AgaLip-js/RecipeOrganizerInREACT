import React from "react";
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <div className="wrapper" id={props.id}>
      {props.secondary ? (
        <textarea
          placeholder={props.placeholder}
          className={props.className}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        ></textarea>
      ) : (
        <input
          onChange={props.onChange}
          className={props.className}
          type={props.type}
          name={props.name}
          value={props.value}
          id={props.id}
          required={props.required}
          placeholder={props.placeholder}
          list={props.list}
          onKeyDown={props.onKeyDown}
        />
      )}
      {props.list && (
        <datalist id={props.list}>
          <option value={props.value}></option>
        </datalist>
      )}
      <span className="highlight"></span>
      <span className="bar"></span>
      {props.primary ? (
        <label htmlFor={props.id} className="shopping-label">
          {props.title}
        </label>
      ) : (
        <label htmlFor={props.id} className="control-label">
          {props.title}
        </label>
      )}
    </div>
  );
};

export default InputForm;
