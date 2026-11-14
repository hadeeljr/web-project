import { useState } from "react";
import "../styles/Home.css";
import GAMES from "../data/Games";
import GameList from "../components/GameList";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  const [games, setGames] = useState(GAMES);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [favorites, setFavorites] = useState([]); // array of game ids
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // filte 
  const visibleGames = games
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()))
    .filter((g) => selectedGenre === "all" || g.genre === selectedGenre)
    .filter((g) => (showOnlyFavorites ? favorites.includes(g.id) : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      return a.id - b.id;
    });

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "name", label: "Name (A-Z)" },
    { value: "rating", label: "Top Rated" },
    { value: "year", label: "Newest" },
  ];

  return (
    <div className="home-page">
      <Header
        search={search}
        setSearch={setSearch}
        showSortMenu={showSortMenu}
        setShowSortMenu={setShowSortMenu}
        sortOptions={sortOptions}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showOnlyFavorites={showOnlyFavorites}
        setShowOnlyFavorites={setShowOnlyFavorites}
        favorites={favorites}
      />


      {/* Main */}
      <main className="home-content">
        <section className="home-intro">
          <h1>Explore the Realm</h1>
          <p>Discover, explore, and keep track of your favorite 2D games.</p>
        </section>

        {/* Game library */}
        <section className="game-library">
          <h2>{showOnlyFavorites ? "My Favorites" : "Explore Games"}</h2>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="genre-filter"
          >
            <option value="all">All Genres</option>

            {[...new Set(games.map((game) => game.genre))].map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <GameList
            games={visibleGames}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />

          {visibleGames.length === 0 && (
            <p className="no-results">No games found.</p>
          )}
        </section>
      </main>
      <Footer />


    </div>
  );
}

export default Home;