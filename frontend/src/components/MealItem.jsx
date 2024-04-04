import React from "react";
import "../index.css";
function MealItem({ meal }) {
  return (
    <div >
      <img />
      <div className="meal-item">
        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <h4>price : {meal.price}</h4>
      </div>
    </div>
  );
}

export default MealItem;
