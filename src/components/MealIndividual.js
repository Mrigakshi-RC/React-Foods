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
      <div className={styles.meal}>
        <ul>
          <li>
            <h3>{props.name}</h3>
          </li>
          <li className={styles.description}>{props.description}</li>
          <li className={styles.price}>{props.price}</li>
        </ul>
        <div className={classes.form}>
          <Input counts={count}/>
          <button onClick={clickHandler}>+Add</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MealIndividual;
