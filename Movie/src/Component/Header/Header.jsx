// Movie-project/Movie/src/Component/Header/Header.jsx
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">NETFLIX</div>
      <nav className="header__nav">
        <a href="#">Netflix</a>
        <a href="#">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">Latest</a>
        <a href="#">My List</a>
        <a href="#">Browse by Languages</a>
      </nav>
      <div className="header__icons">
        <span className="icon">🔍</span>
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

export default Header;
