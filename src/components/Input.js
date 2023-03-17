import inputs from "./Input.module.css";
import React from "react";

function Input(props) {
  const doSomething=()=>{};
  return (
    <div className={inputs.input}>
      <label htmlFor="add">Amount</label>
      <input onChange={doSomething} type="number" id="add" value={props.counts}/>
    </div>
  );
}

export default Input;
