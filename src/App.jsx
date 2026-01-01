import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import Recipes from "./pages/Recipes/Recipes";
import About from "./pages/About/About";


function App() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Recipe Details Page */}
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
