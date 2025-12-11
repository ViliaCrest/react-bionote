export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Created by Vilia Crestene & Carla Primitiva
        </p>
      </div>
    </footer>
  );
}

