import React, {useState} from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import MealItemForm from "./components/MealItemForm";
import Modal from "./components/Modal";

function App() {
  const [checkedIn,setCheckedIn]=useState(false);
  function cartClickHandler(){
    setCheckedIn(true);
  }
  function closeHandler(){
    setCheckedIn(false);
  }
  return (
    <React.Fragment>
      <Header cartClick={cartClickHandler}/>
      <MealsSummary/>
      <MealItemForm/>
      {checkedIn && <Modal close={closeHandler}/>}
    </React.Fragment>
  );
}

export default App;
