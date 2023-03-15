import inputs from "./Input.module.css";
import React from "react";

function Input() {
  return (
    <div className={inputs.input}>
      <label for="add">Amount</label>
      <input type="number" id="add" />
    </div>
  );
}

export default Input;
