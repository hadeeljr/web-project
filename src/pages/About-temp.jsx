import { Link } from "react-router-dom";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <video id="myVideo" className="about-video" autoPlay loop muted playsInline>
        <source src="/images/login-back.mp4" type="video/mp4" />
      </video>

      <div className="about-overlay" />

      <main className="about-content">
        <h1 className="about-title">About Pixel Realm</h1>

        <section className="about-box">
          <h2>What is Pixel Realm?</h2>
          <p>
            Pixel Realm is a website dedicated to pixel art games. Browse the
            collection, search for your favorite titles, and filter games by
            category.
          </p>
        </section>

        <section className="about-box">
          <h2>What you can do</h2>
          <ul>
            <li>Explore a library of pixel art games</li>
            <li>Search games by name</li>
            <li>Filter games by category</li>
            <li>Create an account and sign in</li>
          </ul>
        </section>

        <section className="about-box">
          <h2>Our Team</h2>
          <p>Built by Software Engineering students as part of the Web App Project course.</p>
          <ul>
            <li>Hadeel</li>
            <li>Shahrazad</li>
          </ul>
        </section>

        <Link to="/" className="about-back">
          Back to main menu
        </Link>
      </main>
    </div>
  );
}

export default About;
