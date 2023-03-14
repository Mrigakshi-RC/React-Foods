import styles from "./MealItem.module.css";
import classes from "./MealItemForm.module.css";
import React from 'react';

function MealIndividual(props) {
  return (
    <React.Fragment>
      <div className={styles.meal}>
        <ul>
          <li>{props.name}</li>
          <li>{props.description}</li>
          <li>{props.price}</li>
        </ul>
      </div>
      <div className={classes.form}>
        <label for="add">Amount</label>
        <input type="number" id="add"/>
      </div>
    </React.Fragment>
  );
}

export default MealIndividual;
