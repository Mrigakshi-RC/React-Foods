import styles from "./Header.module.css";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon"
import background from "../images/meals.jpg"
import React, {useContext} from "react";
import CartContext from "../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.item.reduce((curNumber, i)=>{return curNumber+ i.amount},0);
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button className={classes.button} onClick={props.cartClick}>
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
