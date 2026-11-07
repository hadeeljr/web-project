import "../styles/Landing.css";
function Landing() {
  return (
    <main className="landing-page">

      <nav className="landing-nav">

        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/login">Sign In</a>
          <a href="/register">Register</a>
          <a href="/about">About</a>
        </div>
      </nav>

      <section className="landing-content">
        <h2>ENTER THE REALM</h2>
      </section>

    </main>
  );
}

export default Landing;