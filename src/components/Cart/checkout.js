import classes from "./checkout.module.css";
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <div className={classes.checkoutActions}>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={confirmHandler}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
