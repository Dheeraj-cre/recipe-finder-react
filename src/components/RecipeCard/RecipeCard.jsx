import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <article
      className="recipe-card"
      onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
    >
      <div className="card-image">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      </div>

      <div className="card-content">
        <h3>{recipe.strMeal}</h3>
        <button className="view-btn">View Recipe →</button>
      </div>
    </article>
  );
}

export default RecipeCard;
