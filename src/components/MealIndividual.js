import styles from "./MealItem.module.css";
import classes from "./MealItemForm.module.css";
import Input from "./Input";
import React from "react";

function MealIndividual(props) {
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
          <Input />
          <button>+Add</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MealIndividual;
