
import React from 'react'
import './CSS/Checkout.css'


// i varje input ska placeholdern vara förpopulerad om det finns något att
// förpopulera: placeholder={user.firstname} 
const Checkout = () => {
    return (
        <div className="checkoutBody">
            <div className='checkoutProducts'>
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
               <input type="text" name=""   />
               <label>Lastname</label>
               <input type="text" name="" />
               <label>Adress</label>
               <input type="text" name="" />
               <label>Zip Code</label>
               <input type="number" name="" />
               <br />
               <p>send products to this adress</p>
               <button>Send</button>
           </form>
           </div>
         
        </div>
    )
}

export default Checkout
