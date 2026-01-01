import "./Recipes.css";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecipeGrid from "../../components/RecipeGrid/RecipeGrid";
import {
  getCategories,
  getMealsByCategory,
} from "../../services/recipeApi";
import {
  FaUtensils,
  FaLeaf,
  FaFish,
  FaIceCream,
} from "react-icons/fa";

function Recipes() {
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const data = await getCategories();

      //  Remove Beef & Lamb
      const filtered = data.filter(
        (cat) =>
          cat.strCategory !== "Beef" &&
          cat.strCategory !== "Lamb"
      );

      setCategories(filtered);
    }

    fetchCategories();
  }, []);

  async function handleCategoryClick(category) {
    setActiveCategory(category);
    setLoading(true);

    const meals = await getMealsByCategory(category);
    setRecipes(meals);

    setLoading(false);
  }

  return (
    <>
      <Navbar />

      <section className="recipes-page">
        {/* HEADER WITH ICONS */}
        <div className="recipes-header">
          <h1>Browse Recipes</h1>

          <div className="recipes-icons">
            <span><FaUtensils /> All</span>
            <span><FaLeaf /> Veg</span>
            <span><FaFish /> Seafood</span>
            <span><FaIceCream /> Dessert</span>
          </div>

          <p>Select a category to explore delicious meals.</p>
        </div>

        {/* CATEGORY CARDS (NO ICONS INSIDE) */}
        <div className="category-grid">
          {categories.map((cat) => (
            <div
              key={cat.idCategory}
              className={`category-card ${
                activeCategory === cat.strCategory ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat.strCategory)}
            >
              <img
                src={cat.strCategoryThumb}
                alt={cat.strCategory}
                loading="lazy"
              />
              <span>{cat.strCategory}</span>
            </div>
          ))}
        </div>

        {/* RECIPES */}
        {loading && <p className="loading">Loading recipes...</p>}

        {!loading && recipes.length > 0 && (
          <RecipeGrid recipes={recipes} />
        )}
      </section>
    </>
  );
}

export default Recipes;
