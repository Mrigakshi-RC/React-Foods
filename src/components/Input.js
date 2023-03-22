import inputs from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props,ref) => {
  return (
    <form className={inputs.input}>
      <label htmlFor={props.id}>Amount</label>
      <input ref={ref} type="number" id={props.id} step= '1' defaultValue= '1'/>
    </form>
  );
});

export default Input;
