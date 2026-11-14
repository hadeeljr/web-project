function GameCard({ game, favorites, toggleFavorite }) {
  const isFavorite = favorites.includes(game.id);

  return (
    <article className="game-card">
      <div className="game-image-wrapper">
        <img src={game.image} alt={game.title} />

        <button
          className="fav-btn"
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
          onClick={() => toggleFavorite(game.id)}
        >
          <img
            src={
              isFavorite
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
          <img
            src="/images/star.png"
            alt=""
            className="star-icon"
          />
          {game.rating}
        </p>
      </div>
    </article>
  );
}

export default GameCard;