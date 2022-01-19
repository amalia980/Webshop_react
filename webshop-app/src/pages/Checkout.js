import React, {useState, useContext} from 'react'
import './CSS/Checkout.css'
import {UserContext} from '../context/UserContext'



const Checkout = () => {

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
             <div className="buyProductsWrapper">
                <h2>visa produkter vi ska köpa här?</h2>
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
