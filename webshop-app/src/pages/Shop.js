import { useContext } from "react"
import { UserContext } from "../context/UserContext"

import './CSS/Shop.css';
import Products from "./Products";


const Shop = () => {
    const {user} = useContext(UserContext);

    return (
        <>
        <div className="bodyAccount">
            <h2 className="welcomeText">Welcome {user.firstname}!</h2>
        </div>
            <div className='wrapper-products'>  
                <Products />      
            </div>
            </>
    )
}

export default Shop;