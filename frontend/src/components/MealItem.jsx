import "../index.css";
import { Link } from "react-router-dom";
import Review from "./Rating/Review";
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
        <Link to={`/Meals/${meal.id}`}>
          <button>Order</button>
        </Link>
        <Review mealId={meal.id} averageRating={meal.average_rating} />
      </div>
    </div>
  );
}

export default MealItem;
