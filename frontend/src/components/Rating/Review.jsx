import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./Review.css";

const currentRating = 1;
function Review({ mealId, averageRating }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // let currentRating = 1;
  const [newReview, setNewReview] = useState({
    stars: "",
    meal_id: "",
    create_date: "",
    title: "",
  });

  const clickHandler = (event) => {
    event.preventDefault();

    const starValue = Number(event.target.value);
    setRating(starValue);

    // const meal_id = mealId;
    // const title = data.data[0].title;
    const create_date = new Date().toISOString().split("T")[0];
    const reviewData = JSON.stringify({
      ...newReview,
      stars: starValue,
      meal_id: Number(mealId),
      create_date: create_date,
    });
    fetch("https://meal-sharing-hadis.onrender.com/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: reviewData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Reservation successful:", data);
        setNewReview({
          meal_id: "",
          stars: "",
          create_date: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting reservation:", error);
      });
  };

  return (
    <div className="meal-star">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={clickHandler}
              className="input-star"
            />
            <FaStar
              className="star"
              size={20}
              color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>
        Rating: <span className="rating">{averageRating}</span>
      </p>
    </div>
  );
}

export default Review;
