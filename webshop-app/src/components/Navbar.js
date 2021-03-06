import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext.js";
import "./CSS/Navbar.css";

const Navbar = () => {
  const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);
  const { cart, cartVisible, setCartVisible } = useContext(CartContext); //basket state

  const handleCartVisibility = () => {
    return cartVisible ? (
      <button className="cartBtn" onClick={() => setCartVisible(false)}>
        ๐ Close Cart{" "}
      </button>
    ) : (
      <button className="cartBtn" onClick={() => setCartVisible(true)}>
        ๐Cart
      </button>
    );
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
    navigate("/login");
  };

  const LoggedIn = () => {
    return (
      <>
        <nav className="loggedInNav">
          <div className="links">
            <Link className="navLinks" to="/">
              Shop
            </Link>
          </div>
          <div className="navButtons">
           
           <div className="navCart">
              <span className="badge">{cart.length}</span>
              {handleCartVisibility()}
              {cartVisible && <Cart />}
            </div>
            <button className="navButton" onClick={handleLogOut}>
              Logout
            </button>
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
            <Link className="navLinks" to="/shop">
              Shop
            </Link>
            {/* <Link className="navLinks" to="/login">
              Login
            </Link> */}
          </div>
          <div className="navCart navCartLogged">
            <span className="badge">{cart.length}</span>
            {handleCartVisibility()}
            {cartVisible && <Cart />}
          </div>
          
          <button className="navButton" onClick={() =>  navigate("/login")}>Login</button>
        </nav>
      </>
    );
  };
  return <>{loggedIn ? LoggedIn() : LoggedOut()}</>;
};

export default Navbar;
