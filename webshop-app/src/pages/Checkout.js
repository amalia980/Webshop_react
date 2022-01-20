import React, {useState, useContext} from 'react'
import './CSS/Checkout.css'
import {UserContext} from '../context/UserContext'
import { CartContext } from "../context/CartContext";
import useRemoveArrayDuplicates from "../hooks/useRemoveArrayDuplicates";



const Checkout = () => {

  const { cart, setCart} = useContext(CartContext) 
  const filteredCart = useRemoveArrayDuplicates(cart)

  console.log("filtered:",filteredCart);
  
 
  const priceArray = cart.map((p) => p.price);
  

 
  const removeProduct = (id) => {
    setCart([...cart].filter((product) => product.id !== id))
  }


   const {user} = useContext(UserContext)
   


   const [deliveryInfo, setDeliveryInfo] = useState({
       firstname: user.firstname || "",
       lastname: user.lastname ||  "",
       adress: user.adress || "",
       city: user.city || "",
       zipCode: user.zipCode || "",
       products: []
   })
   
  const handleInput = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };

   const sendOrder = (e) => {
       e.preventDefault();
       alert(JSON.stringify(deliveryInfo))
       console.log(deliveryInfo)
   }


    return (
        <div className="bodyCheckout">
          <div className='cart-wrap-checkout'>
          <p className="totalPrice-checkout">Total price: ${priceArray.length > 0
              ? priceArray.reduce((total, price) => total + price) :  "0"}
            </p>
 
            <div className="cart-items-checkout">
              {cart.length <= 0 &&
                <p className="empty-message-checkout"> Your cart is empty...</p>
              }

              {cart.length > 0 && filteredCart.map((product) =>
                
                <div className="product-checkout" key={product.id}>

                  <div className="imgBox-checkout">
                    <img className="img-checkout" src={product.img} alt={product.title}/>
                  </div>

                  <div className="productText-checkout">
                    <span className="title-checkout">{product.title}</span> <br /> 
                    <span className="qty-checkout">{product.qty}</span> st <br />
                    <button className="removeBtn-checkout" onClick={() => removeProduct(product.id)}> Remove </button>        
                  </div>

                  <p className="price-checkout">${product.price * product.qty}</p>
                </div>
                )}
          </div>

      </div>
            
            <div className="checkoutFormWrapper">
    
            <h2>We send your product to this Adress:</h2>
            <form onSubmit={sendOrder} className="checkoutForm">
           
            <input
                className="checkoutInput"
                name="firstname"
                placeholder="Firstname"
                onChange={handleInput}
                value={deliveryInfo.firstname}
                required
              />
              <input
                className="checkoutInput"
                name="lastname"
                placeholder="Lastname"
                onChange={handleInput}
                value={deliveryInfo.lastname}
                required
              />
              <input
                className="checkoutInput"
                name="adress"
                placeholder="Adress"
                onChange={handleInput}
                value={deliveryInfo.adress}
                required
              />
            
              <input
                className="checkoutInput"
                name="zipCode"
                placeholder="Zip code"
                onChange={handleInput}
                value={deliveryInfo.zipCode}
                required
              />
              <input
                className="checkoutInput"
                name="city"
                placeholder="City"
                onChange={handleInput}
                value={deliveryInfo.city}
                required
              />
             <button className="checkoutButton" type='submit'>Make purchase</button>
            </form>
            </div>

        </div>
    )
}

export default Checkout
