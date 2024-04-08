import React from "react";
import "../index.css";
function MealItem({ meal }) {
  return (
    <div className="meal">
      <div className="meal-item">
        <div className="images">
          <img src={meal.image}></img>
        </div>
        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <h4>price : {meal.price}</h4>
      </div>
    </div>
  );
}

export default MealItem;
