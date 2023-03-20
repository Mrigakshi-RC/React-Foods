import styles from "./MealItem.module.css";
import classes from "./MealItemForm.module.css";
import Input from "./Input";
import React, {useState} from "react";

function MealIndividual(props) {
  const [count,setCount]=useState(0);
  function clickHandler(){
    setCount(count+1);
  }

  return (
    <React.Fragment>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
        <div className={classes.form}>
          <Input counts={count} id={props.id}/>
          <button onClick={clickHandler}>+Add</button>
        </div>
      </li>
    </React.Fragment>
  );
}

export default MealIndividual;
