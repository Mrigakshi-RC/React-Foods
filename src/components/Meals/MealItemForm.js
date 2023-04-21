import MealIndividual from "./MealIndividual";
import classes from "./AvailableMeals.module.css";
import card from "../UI/Card.module.css";
import React, { useState, useEffect } from "react";

function MealItemForm() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let loadedMeals = [];
  useEffect(() => {
    fetch(
      "https://custom-http-hook-3840b-default-rtdb.firebaseio.com/meals.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (let key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        return loadedMeals;
      })
      .then((loadedMeals) => {
        setMeals(loadedMeals);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
  return <p className={classes.loading}>Loading...</p>
  
  return (
    <div className={`${card.card} ${classes.meals}`}>
      <ul>
        {meals.map((meal) => (
          <MealIndividual
            name={meal.name}
            description={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
            // count={meal.count}
          />
        ))}
      </ul>
    </div>
  );
}

export default MealItemForm;
