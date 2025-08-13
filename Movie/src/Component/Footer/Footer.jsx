// Movie-project/Movie/src/Component/Footer/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <span className="footer__icon">📘</span>
        <span className="footer__icon">📸</span>
        <span className="footer__icon">▶️</span>
      </div>
      <div className="footer__links">
        <div>
          <a href="#">Audio Description</a>
          <a href="#">Investor Relations</a>
          <a href="#">Legal Notice</a>
          <button className="footer__service-code">Service Code</button>
          <div className="footer__copyright">© 1997-2024 Netflix, Inc.</div>
        </div>
        <div>
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <div>
          <a href="#">Gift Cards</a>
          <a href="#">Terms of Use</a>
          <a href="#">Corporate Information</a>
        </div>
        <div>
          <a href="#">Media Center</a>
          <a href="#">Privacy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <h1>PREPARED BY OLIRA</h1>
    </footer>
  );
}

export default Footer;