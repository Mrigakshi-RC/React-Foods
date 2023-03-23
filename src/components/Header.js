import styles from "./Header.module.css";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon"
import background from "../images/meals.jpg"
import React, {useContext, useEffect, useState} from "react";
import CartContext from "../store/cart-context";

function Header(props) {
  const [btnIsHighlighted,setBtnIsHighlighted]=useState(false);

  const cartCtx = useContext(CartContext);
  const {items}=cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item)=>{return curNumber+ item.amount},0);

  const btnClasses =`${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

  useEffect(()=>{
    if (items.length===0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(()=> {
      setBtnIsHighlighted(false);
    },300); //end animation-facilitator after 300 ms ?(the duration for which  the animation was scheduled)

    return () =>{
      clearTimeout(timer); //if we add items rapidly one after another, we need to clear  timer so that it doesnt wait for the timer to end
    };
  }, [items]);

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button className={btnClasses} onClick={props.cartClick}>
          <CartIcon className={classes.icon}/>
          <p>Your Cart</p>
          <div className={classes.badge}>{numberOfCartItems}</div>
        </button>
      </header>
      <div className={styles.mainImage}>
        <img src={background} alt="background"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
