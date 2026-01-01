import { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, loading, defaultValue = "" }) {
  const [query, setQuery] = useState(defaultValue);

  // Sync when URL changes
  useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar-inner">
        <input
          type="text"
          placeholder="Search by dish or ingredient…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching…" : "Browse recipes"}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
