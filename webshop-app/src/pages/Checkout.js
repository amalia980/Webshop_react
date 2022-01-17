import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import './CSS/Checkout.css'


// i varje input ska placeholdern vara förpopulerad om det finns något att
// förpopulera tex såhär: placeholder={user.firstname} 
const Checkout = () => {
    
    const {user} = useContext(UserContext)

    return (
       
        <div className="checkoutBody">
            <div className='checkoutProducts'>
                <h2>Checkout</h2>
                <br />
                <h2>Här är en div för att visa de produkter vi ska köpa, 
                    om det behövs?
                </h2>
            </div>
             
             <div className="checkout">
             {/* Adress formulär */}
            <form className="checkoutForm">
                <div className="textCheckoutForm">
                <h3>We deliver your products to following adress:</h3>
                </div>
                <br></br>
               <label>Firstname</label>
               <input className="checkoutInput" type="text" name=""   />
               <label>Lastname</label>
               <input className="checkoutInput" type="text" name="" />
               <label>Adress</label>
               <input className="checkoutInput" type="text" name="" />
               <label >Zip Code</label>
               <input className="checkoutInput" type="number" name="" />
               <br />
               <button className='checkoutButton'>Make purchase </button>
           </form>
           </div>
         
        </div>
    )
}

export default Checkout
