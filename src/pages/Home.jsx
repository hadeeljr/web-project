import { useState } from "react";
import "../styles/Home.css";

// 10 records (placeholder data: replace with your own games later)
const GAMES = [
  { id: 1, title: "Game One", genre: "Platformer", year: 2019, rating: 4.5, image: "/images/games/game1.png" },
  { id: 2, title: "Game Two", genre: "RPG", year: 2020, rating: 4.8, image: "/images/games/game2.png" },
  { id: 3, title: "Game Three", genre: "Adventure", year: 2018, rating: 4.2, image: "/images/games/game3.png" },
  { id: 4, title: "Game Four", genre: "Puzzle", year: 2021, rating: 4.0, image: "/images/games/game4.png" },
  { id: 5, title: "Game Five", genre: "Roguelike", year: 2017, rating: 4.9, image: "/images/games/game5.png" },
  { id: 6, title: "Game Six", genre: "Shooter", year: 2022, rating: 3.9, image: "/images/games/game6.png" },
  { id: 7, title: "Game Seven", genre: "Farming", year: 2016, rating: 4.7, image: "/images/games/game7.png" },
  { id: 8, title: "Game Eight", genre: "Fighting", year: 2023, rating: 4.1, image: "/images/games/game8.png" },
  { id: 9, title: "Game Nine", genre: "Strategy", year: 2015, rating: 4.3, image: "/images/games/game9.png" },
  { id: 10, title: "Game Ten", genre: "Metroidvania", year: 2020, rating: 4.6, image: "/images/games/game10.png" },
];

function Home() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [favorites, setFavorites] = useState([]); // array of game ids
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // 1) filter (search + favorites)  2) sort
  const visibleGames = GAMES
    .filter((g) => g.title.toLowerCase().includes(search.toLowerCase()))
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
      {/* Header: icons only */}
      <header className="home-header">
        <h1 className="logo">PIXEL REALM</h1>

        {/* Search */}
        <div className="search-bar">
          <img src="/images/search.png" alt="" className="search-icon" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <nav className="header-icons">
          <a href="/" className="icon-btn" title="Home" aria-label="Home">
            <img src="/images/home.png" alt="" />
          </a>

          {/* Sort */}
          <div className="sort-wrapper">
            <button
              className="icon-btn"
              title="Sort"
              aria-label="Sort"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <img src="/images/sort.png" alt="" />
            </button>

            {showSortMenu && (
              <ul className="sort-menu">
                {sortOptions.map((opt) => (
                  <li
                    key={opt.value}
                    className={sortBy === opt.value ? "active" : ""}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSortMenu(false);
                    }}
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Favorites */}
          <button
            className={`icon-btn ${showOnlyFavorites ? "active" : ""}`}
            title="Favorites"
            aria-label="Favorites"
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
          >
            <img src="/images/heart.png" alt="" />
            {favorites.length > 0 && (
              <span className="badge">{favorites.length}</span>
            )}
          </button>

          <a href="/login" className="icon-btn" title="Login" aria-label="Login">
            <img src="/images/login.png" alt="" />
          </a>

          <a href="/register" className="icon-btn" title="Register" aria-label="Register">
            <img src="/images/register.png" alt="" />
          </a>
        </nav>
      </header>

      {/* Main */}
      <main className="home-content">
        <section className="home-intro">
          <h1>Explore the Realm</h1>
          <p>Discover, explore, and keep track of your favorite 2D games.</p>
        </section>

        {/* Game library */}
        <section className="game-library">
          <h2>{showOnlyFavorites ? "My Favorites" : "Explore Games"}</h2>

          <div className="game-grid">
            {visibleGames.map((game) => (
              <article className="game-card" key={game.id}>
                <div className="game-image-wrapper">
                  <img src={game.image} alt={game.title} />
                  <button
                    className="fav-btn"
                    aria-label="Toggle favorite"
                    onClick={() => toggleFavorite(game.id)}
                  >
                    <img
                      src={
                        favorites.includes(game.id)
                          ? "/images/heart-filled.png"
                          : "/images/heart.png"
                      }
                      alt=""
                    />
                  </button>
                </div>

                <div className="game-info">
                  <h3>{game.title}</h3>
                  <p className="game-meta">
                    {game.genre} • {game.year}
                  </p>
                  <p className="game-rating">
                    <img src="/images/star.png" alt="" className="star-icon" />
                    {game.rating}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {visibleGames.length === 0 && (
            <p className="no-results">No games found.</p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <h3>PIXEL REALM</h3>
        <nav className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
        <p>© 2026 Pixel Realm. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

/*import "../styles/Home.css";
function Home() {
  return (
    <div className="home-page">

      {/* Header and nav }
      <header className="home-header">
        <h1>PIXEL REALM</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      {/* Main }
      <main className="home-content">

        <section className="home-intro">
          <h1>Explore the Realm</h1>
          <p>
            Discover, explore, and keep track of your favorite
            2D games.
          </p>
        </section>

        {/* Game library }
        <section className="game-library">
          <h2>Explore Games</h2>

          <div className="game-grid">
            {/* the 10 rec }
          </div>
        </section>

      </main>

    </div>
  );
}

export default Home;*/
