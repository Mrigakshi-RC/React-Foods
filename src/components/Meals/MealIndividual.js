import styles from "./MealItem.module.css";
import classes from "./MealItemForm.module.css";
import Input from "../Input";
import React, {useRef} from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

function MealIndividual(props) {
  const cartCtx= useContext(CartContext);
  const amountInputRef = useRef();

  const addToCartHandler = amount =>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    });
  };
  
  const submitHandler = event =>{
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //plus sign converts it into number

    addToCartHandler(enteredAmountNumber);
  };

  return (
    <React.Fragment>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input ref={amountInputRef} id={props.id}/>
          <button>+Add</button>
        </form>
      </li>
    </React.Fragment>
  );
}

export default MealIndividual;
