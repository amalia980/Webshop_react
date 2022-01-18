import { Link } from "react-router-dom";
import './CSS/Cart.css'

//context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext) 

    return(
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length /*? (
          cart.map(item => <products key={item.id} item={item} />)
        ) : (*/ <= 0 &&
          <p className="empty-message"> Your cart is empty...</p>
        }
      </div>
      <Link className="checkoutBtn" to="/checkout"> CHECKOUT </Link>
    </div>
    )
    };


