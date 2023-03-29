import React, {useState} from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import MealItemForm from "./components/Meals/MealItemForm";
import Modal from "./components/Cart/Modal";
import CartProvider from "./components/store/CartProvider";

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
