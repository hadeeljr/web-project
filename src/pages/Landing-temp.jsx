import "../styles/Landing.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <main className="landing-page">

      <section className="main-menu">


        <nav className="menu-options">
          <Link to="/home">HOME</Link>
          <Link to="/login">LOGIN</Link>
          <Link to="/register">REGISTER</Link>
          <Link to="/about">ABOUT</Link>
        </nav>


      </section>

    </main>

  );
}

export default Landing;

