import styles from "./Header.module.css";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon"
import background from "../images/meals.jpg"
import React from "react";

function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <div className={classes.button}>
          <CartIcon className={classes.icon}/>
          <p>Your Cart</p>
          <div className={classes.badge}>0</div>
        </div>
      </header>
      <div className={styles.mainImage}>
        <img src={background} alt="background"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
