import "./RecipeDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeDetails } from "../../services/recipeApi";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchRecipe() {
      try {
        setLoading(true);
        setError("");
        const data = await getRecipeDetails(id);
        if (isMounted) setRecipe(data);
      } catch {
        if (isMounted) setError("Failed to load recipe details.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchRecipe();
    return () => (isMounted = false);
  }, [id]);

  if (loading) return <p style={{ padding: 24 }}>Loading recipe...</p>;
  if (error) return <p style={{ padding: 24, color: "red" }}>{error}</p>;
  if (!recipe) return <p style={{ padding: 24 }}>Recipe not found.</p>;

  return (
    <div className="details-page">
      {/* Header */}
      <header className="details-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </header>

      {/* MAIN LAYOUT */}
      <div className="details-container">
        {/* LEFT (SCROLL CONTENT) */}
        <div className="details-left">
          <h1>{recipe.strMeal}</h1>

          {/* Ingredients */}
          <section className="detail-card">

            <h2> Ingredients</h2>
            <ul>
              {Array.from({ length: 20 }).map((_, i) => {
                const ingredient = recipe[`strIngredient${i + 1}`];
                const measure = recipe[`strMeasure${i + 1}`];
                if (!ingredient) return null;

                return (
                  <li key={i}>
                    {measure} {ingredient}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Instructions */}
          <section className="detail-card">

            <h2> Instructions</h2>
            <p>{recipe.strInstructions}</p>
          </section>
        </div>

        {/* RIGHT (FIXED IMAGE) */}
        <div className="details-right">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
