import "../styles/Home.css";
function Home() {
  return (
    <div className="home-page">

      {/* Header and nav */}
      <header className="home-header">
        <h1>PIXEL REALM</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      {/* Main */}
      <main className="home-content">

        <section className="home-intro">
          <h1>Explore the Realm</h1>
          <p>
            Discover, explore, and keep track of your favorite
            2D games.
          </p>
        </section>

        {/* Game library */}
        <section className="game-library">
          <h2>Explore Games</h2>

          <div className="game-grid">
            {/* the 10 rec */}
          </div>
        </section>

      </main>

    </div>
  );
}

export default Home;
