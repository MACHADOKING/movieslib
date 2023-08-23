// CSS
import "./Navbar.css";
// Hooks
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <header>
      <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie />
            MoviesLib
          </Link>
        </h2>
        <form>
          <input type="text" placeholder="Busque um filme" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
