import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeGrid.css";

function RecipeGrid({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return (
      <div className="empty-state">
        <p> Search for a recipe to get started</p>
      </div>
    );
  }

  return (
    <section className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </section>
  );
}

export default RecipeGrid;
