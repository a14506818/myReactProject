import "./App.css";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function App() {
  const APP_ID = "bf6733f9";
  const APP_KEY = "f2d5ab52af95ec785fb9e512e466b22d";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("lamb");

  useEffect(async () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    console.log(data.hits);
    setRecipe(data.hits);
  };

  const updateSearchValue = (e) => {
    if (!e) return;
    setSearch(e.target.value);
  };

  const grtSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App" style={{ display: "flex", margin: "auto" }}>
      <h1>Recipe Searching App</h1>
      <form className="search-form" onSubmit={grtSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearchValue}
          style={{ width: "50%" }}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <br />
      <div className="recipes">
        {recipe.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.uri}
          ></Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;
