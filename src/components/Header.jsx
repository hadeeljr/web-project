function Header({
  search,
  setSearch,
  showSortMenu,
  setShowSortMenu,
  sortOptions,
  sortBy,
  setSortBy,
  showOnlyFavorites,
  setShowOnlyFavorites,
  favorites,
}) {
  return (
    <header className="home-header">
      <h1 className="logo">PIXEL REALM</h1>

      {/* Search */}
      <div className="search-bar">
        <img
          src="/images/search.png"
          alt=""
          className="search-icon"
        />
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
          className={`icon - btn ${showOnlyFavorites ? "active" : ""}`}
        title="Favorites"
        aria-label="Favorites"
        onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
>
        <img src="/images/heart.png" alt="" />

        {favorites.length > 0 && (
          <span className="badge">{favorites.length}</span>
        )}
      </button>

      <a
        href="/login"
        className="icon-btn"
        title="Login"
        aria-label="Login"
      >
        <img src="/images/login.png" alt="" />
      </a>

      <a
        href="/register"
        className="icon-btn"
        title="Register"
        aria-label="Register"
      >
        <img src="/images/register.png" alt="" />
      </a>
    </nav>
    </header >
  );
}

export default Header;