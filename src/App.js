import React, {useState} from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import MealItemForm from "./components/MealItemForm";
import Modal from "./components/Modal";
import CartProvider from "./store/CartProvider";

function App() {
  const [checkedIn,setCheckedIn]=useState(false);
  function cartClickHandler(){
    setCheckedIn(true);
  }
  function closeHandler(){
    setCheckedIn(false);
  }
  return (
    <CartProvider>
      <Header cartClick={cartClickHandler}/>
      <MealsSummary/>
      <MealItemForm/>
      {checkedIn && <Modal close={closeHandler}/>}
    </CartProvider>
  );
}

export default App;
