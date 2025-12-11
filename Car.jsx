export default function Car({ onLogin }) {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(); // simulate login success
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    onLogin(); // simulate sign-up success
  };

  return (
    <div className="car-wrapper">
      <h1 className="car-header">This is a Car Component</h1>

      {/* Login Form */}
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Sign Up Form */}
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSignUpSubmit}>
          <h2>Sign Up</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}