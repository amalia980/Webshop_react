import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext.js"; 
import "./CSS/Navbar.css";

const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const { cartVisible, setCartVisible} = useContext(CartContext); //basket state

  //Basket visibility. Om basketVisible är true visas en knapp för att stänga varukorgen annars visas en knapp för att öppna den.
  const handleCartVisibility = () => {
    return cartVisible ? <button className="cartBtn" onClick={() => setCartVisible(false)}>🛒 Close Cart </button> : <button className="cartBtn" onClick={() => setCartVisible(true)}>🛒 Cart</button> 
}


  const navigate = useNavigate();

  const handleLogOut = () => {
    setLoggedIn(false);
    navigate("/login");
  };

  const LoggedIn = () => {
    return (
      <>
        <nav>
          <div className="links">
            <Link className="navLinks" to="/">Shop</Link>
          </div>

          <div className="navButtons">
            {handleCartVisibility()}
            {cartVisible && <Cart />} 

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
