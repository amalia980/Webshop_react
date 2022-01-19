import { Link } from "react-router-dom";
import './CSS/Cart.css'
import useRemoveArrayDuplicates from "../hooks/useRemoveArrayDuplicates";


//context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../services/products";


export default function Cart() {
    const { cart, setCart, cartVisible } = useContext(CartContext) 
    
   
    const priceArray = cart.map((p) => p.price);
    
    const filteredCart = useRemoveArrayDuplicates(cart)
    console.log("filtered:",filteredCart);

    const removeProducts = (id) => {
      setCart([...cart].filter(products.id !== id))
    }

    return(
    <div className="cart-dropdown">
        <div className='header'>
        <h3 className='heading'>Shopping Cart</h3>
        </div>

      <div className="cart-items">
        {cart.length <= 0 &&
          <p className="empty-message"> Your cart is empty...</p>
        }
        {cart.length > 0 && filteredCart.map((products) =>
          <div key={products.id}>
            <p>
             {products.title} {products.qty} st <br /> 
             {products.price * products.qty} kr
            </p>
            <button onClick={() => removeProducts(products)}>Remove</button>
          </div>
          )}
      </div>
      <p>Total price: {priceArray.length > 0 ? priceArray.reduce((total, price) => total + price) : "0"} kr</p>
      <Link onClick={cartVisible} className="checkoutBtn" to="/checkout"> CHECKOUT </Link>
    </div>
    )
    };


