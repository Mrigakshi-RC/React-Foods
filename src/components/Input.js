import inputs from "./Input.module.css";
import React from "react";

function Input(props) {
  const doSomething=()=>{};
  return (
    <form className={inputs.input}>
      <label htmlFor="add">Amount</label>
      <input onChange={doSomething} type="number" id={props.id} value={props.counts}/>
    </form>
  );
}

export default Input;
