import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import RecipeGrid from "../../components/RecipeGrid/RecipeGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { searchRecipes } from "../../services/recipeApi";
import { useSearchParams } from "react-router-dom";
import {
  FaSearch,
  FaUtensils,
  FaRandom,
  FaMobileAlt,
} from "react-icons/fa";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    setSearchParams({ q: query });

    try {
      setLoading(true);
      setError("");
      const results = await searchRecipes(query);
      setRecipes(results);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!queryFromUrl) return;

    async function restoreSearch() {
      try {
        setLoading(true);
        const results = await searchRecipes(queryFromUrl);
        setRecipes(results);
      } catch (err) {
        setError("Failed to restore previous search.");
      } finally {
        setLoading(false);
      }
    }

    restoreSearch();
  }, [queryFromUrl]);

  return (
    <>
      <Navbar />

      <section className="hero-section">
        <div className="hero-content">
          <h1>Everyone is a chef in their own way.</h1>
          <p>Find recipes that match your taste.</p>

          <SearchBar
            onSearch={handleSearch}
            loading={loading}
            defaultValue={queryFromUrl}
          />

          {/* ICON FEATURES */}
          <div className="hero-features">
            <div className="hero-feature">
              <FaSearch />
              <span>Smart Search</span>
            </div>
            <div className="hero-feature">
              <FaUtensils />
              <span>Browse Categories</span>
            </div>
            <div className="hero-feature">
              <FaRandom />
              <span>Random Recipe</span>
            </div>
            <div className="hero-feature">
              <FaMobileAlt />
              <span>Mobile Friendly</span>
            </div>
          </div>

          {error && (
            <p style={{ color: "red", marginTop: 12 }}>{error}</p>
          )}
        </div>
      </section>

      <RecipeGrid recipes={recipes} />
    </>
  );
}

export default Home;
