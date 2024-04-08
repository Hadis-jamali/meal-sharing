import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";

function MealsList() {
  const [meals, setMeals] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/meals");
        if (response.data !== null) {
          console.log(response.data);
          console.log("MealsList component rendered");
          setMeals(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      
      <div className="meal-list">
        {loading ? (
          <p>Loading...</p>
        ) : meals.data.length > 0 ? (
          meals.data.map((meal) => <MealItem key={meal.meal_id} meal={meal} />)
        ) : (
          <p>No Item</p>
        )}
      </div>
    </>
  );
}

export default MealsList;
