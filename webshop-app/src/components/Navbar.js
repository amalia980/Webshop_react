import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./CSS/Navbar.css";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoggedIn(false);
    navigate("/login");
  };

  const LoggedIn = () => {
    return (
      <>
        <nav className="loggedInNav">
          <div className="links">
            <Link className="navLinks" to="/shop">Shop</Link>
          </div>
          <div className="navButtons">
            <button className="navButton" onClick={handleLogOut}>Logout</button>
          </div>
        </nav>
      </>
    );
  };

  const LoggedOut = () => {
    return (
      <>
        <nav className="loggedOutNav">
          <div className="links">
          <Link className="navLinks" to="/shop">Shop</Link>
          <Link className="navLinks" to="/login">
            Login
          </Link>
          </div>
        </nav>
      </>
    );
  };
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;
};

export default Navbar;
