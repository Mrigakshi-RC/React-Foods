import React, { useContext, useState } from "react";
import styles from "./Modal.module.css";
import classes from "./Cart.module.css";
import ReactDOM from "react-dom";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./checkout";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    fetch(
      "https://custom-http-hook-3840b-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    ).then(() => {
      setIsSubmitting(false);
      setDidSubmit(true);
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.buttonContainer}>
      <button onClick={props.close} className={styles.close}>
        close
      </button>
      {hasItems && (
        <button className={styles.order} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const ModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.totalContainer}>
        <h3>Total Amount</h3>
        <h3>{totalAmount}</h3>
      </div>
      {!isCheckout && modalActions}
      {isCheckout && (
        <Checkout onCancel={props.close} onConfirm={submitOrderHandler} />
      )}
    </React.Fragment>
  );

  const isSubmittingContent = (
    <React.Fragment>
      <p>Sending Data</p>
      <div className={styles.buttonContainer}>
        <button onClick={props.close} className={styles.close}>
          close
        </button>
      </div>
    </React.Fragment>
  );
  const didSubmitContent = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={styles.buttonContainer}>
        <button onClick={props.close} className={styles.close}>
          close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <div className={styles.modal}>
      {!isSubmitting && !didSubmit && ModalContent}
      {isSubmitting && !didSubmit && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay close={props.close} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
