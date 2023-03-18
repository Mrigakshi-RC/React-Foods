import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.totalContainer}>
            <h3>Total Amount</h3>
            <h3>$0.00</h3>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={props.close} className={styles.close}>close</button>
            <button className={styles.order}>Order</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
