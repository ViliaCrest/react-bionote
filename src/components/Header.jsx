export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 className="logo-text">Bionote App</h1>
        </div>
        <nav className="navbar">
          <a href="#home" className="nav-link">Home</a>
          <a href="#profiles" className="nav-link">Profiles</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
}

