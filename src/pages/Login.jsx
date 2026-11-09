

import "../styles/Authentication.css";

function Login() {
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
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              autoComplete="username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder= "password"
              autoComplete="current-password"
              required
            />
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
