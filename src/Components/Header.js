import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Header;
