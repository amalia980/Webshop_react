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
            <h3 className='heading'>Shopping Cart</h3>
        <div className="cart-items">
          {cart.length <= 0 &&
            <p className="empty-message"> Your cart is empty...</p>
          }

          {cart.length > 0 && filteredCart.map((product) =>
            
            <div className="product" key={product.id}>

              <div className="imgBox">
                <img className="productImg" src={product.img} alt={product.title}/>
              </div>

              <div className="productText">
                <span className="title">{product.title}</span> <br /> 
                <span className="qty">{product.qty}</span> st <br />
                <button className="removeBtn" onClick={() => removeProduct(product.id)}> Remove </button>        
              </div>

              <p className="price">${product.price * product.qty}</p>

            </div>
            )}
        </div>
        <hr />
        <div className="checkoutStyle">
         <p className="totalPrice">Total price: ${priceArray.length > 0
         ? priceArray.reduce((total, price) => total + price) :  "0"}</p>
        <Link className="checkoutBtn" to="/checkout"> CHECKOUT </Link>
        </div>
      </div>
    )};


