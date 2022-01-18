import React, {useContext} from "react";
import {UserContext} from '../context/UserContext'
import "./CSS/Checkout.css";


const Checkout = () => {

  const {user} = useContext(UserContext)

  return (
    <div className="checkoutBody">
      <div className="checkoutProducts">
          <h2>vill vi visa produkter vi har köpt här?</h2>
      </div>
      <div className="checkoutFormDiv">
        <form className="checkoutForm">
        <label >Firstname</label>
          <input className="checkoutInput" name="firstname" placeholder={user.firstname} />
          <label>Lastname</label>
          <input className="checkoutInput" className="checkoutInput" name="lastname" placeholder={user.lastname} />
          <label >Adress</label>
          <input className="checkoutInput" name="adress" placeholder={user.adress} />
          <label>City</label>
          <input className="checkoutInput" name="city" placeholder={user.city} />
          <br />
          <button className="checkoutButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
