import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./CSS/Navbar.css";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const handleLogOut = () => {
    setLoggedIn(false);
  };

  const LoggedIn = () => {
    return (
      <>
        <nav>
          <div className="links">
            <Link className="navLinks" to="/account">
              Account
            </Link>
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
        <nav>
          <Link className="navLinks" to="/login">
            Login
          </Link>
        </nav>
      </>
    );
  };
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;
};

export default Navbar;
