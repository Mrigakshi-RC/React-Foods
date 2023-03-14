import React from "react";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import MealItemForm from "./components/MealItemForm";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <MealsSummary/>
      <MealItemForm/>
    </React.Fragment>
  );
}

export default App;
