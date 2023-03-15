import MealIndividual from "./MealIndividual";
import classes from "./AvailableMeals.module.css";
import card from "../UI/Card.module.css";
import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function MealItemForm() {
  return (
    <div className={`${card.card} ${classes.meals}`}>
      {DUMMY_MEALS.map((meal) => (
        <MealIndividual
        name={meal.name} 
        description={meal.description}
        price={meal.price}
        id={meal.id} />
      ))}
    </div>
  );
}

export default MealItemForm;