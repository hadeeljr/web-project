import GameCard from "./GameCard";

function GameList({ games, favorites, toggleFavorite }) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}


export default GameList;