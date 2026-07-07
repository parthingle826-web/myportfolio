import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Parth.dev</h2>

      <div className="nav-links">
        <Link to="about" smooth={true}>About</Link>
        <Link to="skills" smooth={true}>Skills</Link>
        <Link to="projects" smooth={true}>Projects</Link>
        <Link to="contact" smooth={true}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;