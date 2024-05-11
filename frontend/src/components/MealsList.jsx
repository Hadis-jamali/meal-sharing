import React, { useState, useEffect } from "react";
import axios from "axios";
import MealItem from "./MealItem";
import Search from "./SearchBox/Search";

function MealsList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState([]);

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

  const searchHandler = () => {
    if (search) {
      let searchMeals = {
        data: meals.data,
      };
      searchMeals.data = meals.data.filter((meal) => {
        return meal.title.toLowerCase().includes(search);
      });
      setMeals(searchMeals);
    } else {
      setMeals(meals);
    }
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} searchHandler={searchHandler} />

      <div className="meal-list">
        {loading ? (
          <p>Loading...</p>
        ) : meals.data.length > 0 ? (
          meals.data.map((meal) => <MealItem key={meal.id} meal={meal} />)
        ) : (
          <p>No Item</p>
        )}
      </div>
    </>
  );
}

export default MealsList;
