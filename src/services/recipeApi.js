const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/*  Search meals by name */
export async function searchRecipes(query) {
  if (!query) return [];

  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();

  // TheMealDB returns null if nothing found
  return data.meals || [];
}

/*  Get meal details by ID */
export async function getRecipeDetails(id) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();

  return data.meals ? data.meals[0] : null;
}



// Get all categories
export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories.php`);
  const data = await res.json();
  return data.categories || [];
}

// Get meals by category
export async function getMealsByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals || [];
}

