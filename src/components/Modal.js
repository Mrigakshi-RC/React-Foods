import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.close}></div>;
};

const ModalOverlay = (props) => {
  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
  //       <li>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  return (
    <div className={styles.modal}>
      {/* {cartItems} */}
      <div className={styles.totalContainer}>
        <h3>Total Amount</h3>
        <h3>$0.00</h3>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={props.close} className={styles.close}>
          close
        </button>
        <button className={styles.order}>Order</button>
      </div>
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
