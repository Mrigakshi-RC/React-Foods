import inputs from "./Input.module.css";
import React from "react";

function Input(props) {
  return (
    <div className={inputs.input}>
      <label for="add">Amount</label>
      <input type="number" id="add" value={props.value}/>
    </div>
  );
}

export default Input;
