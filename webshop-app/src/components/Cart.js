import { Link } from "react-router-dom";
import './CSS/Cart.css'
import useRemoveArrayDuplicates from "../hooks/useRemoveArrayDuplicates";


//context
import { useContext } from "react";
import { CartContext } from "../context/CartContext";




export default function Cart() {

    const { cart, setCart} = useContext(CartContext) 
    const filteredCart = useRemoveArrayDuplicates(cart)

    console.log("filtered:",filteredCart);
    
   
    const priceArray = cart.map((p) => p.price);
    
   
    const removeProduct = (id) => {
      setCart([...cart].filter((product) => product.id !== id))
    }

    return ( 
      <div className="cart-dropdown">
          <div className='header'>
          <h3 className='heading'>Shopping Cart</h3>
          </div>

        <div className="cart-items">
          {cart.length <= 0 &&
            <p className="empty-message"> Your cart is empty...</p>
          }

          {cart.length > 0 && filteredCart.map((product) =>
            <div key={product.id}>
              <p>
              {product.title} {product.qty} st <br />
                  {product.price * product.qty} kr
              </p>
              <button onClick={() => removeProduct(product.id)}> Remove </button>
            </div>
            )}
        </div>

         <p>Total price: {""} {priceArray.length > 0
         ? priceArray.reduce((total, price) => total + price) : "0"}{""}kr</p>


        <Link className="checkoutBtn" to="/checkout"> CHECKOUT </Link>
      </div>
    )};


