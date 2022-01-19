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
        🛒 Close Cart{" "}
      </button>
    ) : (
      <button className="cartBtn" onClick={() => setCartVisible(true)}>
        🛒Cart
      </button>
    );
  };

  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
    navigate("/login");
  };

  const moveToLogin = () => {
    navigate("/login");
  }

  // skillnad har knappen LogOut
  const navLogIn = () => {
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
            <button className="navButton" onClick={handleLogOut}>Logout</button>
          </div>
        </nav>
      </>
    );
  };
  
  // skillnad har knappen LogIn
  const navLogOut = () => {
    return (
      <>
        <nav className="loggedInNav">
          <div className="links">
            <Link className="navLinks" to="/shop">
              Shop
            </Link>
        
          </div>
          <div className="navButtons">
            <div className="navCart">
              <span className="badge">{cart.length}</span>
              {handleCartVisibility()}
              {cartVisible && <Cart />}
            </div>
            <button onClick={moveToLogin} className="navButton" >Login</button>
          </div>
        </nav>
      </>
    );
  };
  return <>{loggedIn ? navLogIn() : navLogOut()}</>;
};

export default Navbar;
