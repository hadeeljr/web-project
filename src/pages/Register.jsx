import { useState } from "react";
import "../styles/Authentication.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("PASSWORDS DO NOT MATCH");
      return;
    }

    setError("");
    // Register functionality will be added later.
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
            <label htmlFor="email"></label>



            <div className="input-with-icon">
              <img
                src="/images/mail.png"
                alt=""
                className="input-icon"
              />


              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                autoComplete="email"
                required
              />
            </div>
          </div>



          <div className="input-group">
            <div className="input-with-icon">
              <img src="/images/lock2.png" alt="" className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password"
                autoComplete="new-password"
                minLength={6}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <img src={showPassword ? "/images/eye.png" : "/images/visible.png"} alt="" />
              </button>
            </div>
          </div>


          <div className="input-group">
            <div className="input-with-icon">
              <img src="/images/lock2.png" alt="" className="input-icon" />

              <input
                type={showConfirm ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                <img src={showConfirm ? "/images/eye.png" : "/images/visible.png"} alt="" />
              </button>
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="login-button">
            CREATE ACCOUNT
          </button>
        </form>


        <a href="/" className="back-link">
          BACK TO MAIN MENU
        </a>
      </section>
    </main>
  );
}

export default Register;

