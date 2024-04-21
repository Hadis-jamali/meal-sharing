import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
function MealItem({ meal }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="meal">
      <div className="meal-item">
        <div className="images">
          <img src={meal.image}></img>
        </div>

        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <h4>price : {meal.price}</h4>
        <Link to={`/Meals/${meal.id}`}>
          <button>Order</button>
        </Link>
        <div className="meal-star">
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  className="input-star"
                />
                <FaStar
                  className="star"
                  size={20}
                  color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
          <p>
            Rating : <span className="rating">{rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
