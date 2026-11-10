

import "../styles/Authentication.css";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Login functionality will be added later.
  };

  return (
    <main className="login-page">

      <video id="myVideo" className="login-background" autoPlay loop muted playsInline>
        <source src="/images/login-back.mp4" type="video/mp4" />
      </video>


      <section className="login-container">
        <h1 className="login-title">PIXEL REALM</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username"></label>
            <div className="input-with-icon">
              <img
                src="/images/profile-avatar.png"
                alt=""
                className="input-icon"
              />

              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-icon"></label>

            <div className="input-with-icon">
              <img
                src="/images/lock2.png"
                alt=""
                className="input-icon"
              />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <img
                  src={showPassword ? "/images/eye.png" : "/images/visible.png"}
                  alt=""
                />
              </button>
            </div>
          </div>


          <button type="submit" className="login-button">
            SIGN IN
          </button>


        </form>

        <p className="register-prompt">
          DON'T HAVE AN ACCOUNT?
          <a href="/register"> REGISTER</a>
        </p>

        <a href="/" className="back-link">
          BACK TO MAIN MENU
        </a>
      </section>
    </main>
  );
}

export default Login;
