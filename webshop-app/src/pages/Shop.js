import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { CartContext } from "../context/CartContext";

import './CSS/Shop.css';
import products from '../services/products';
import Products from "./Products";


const Shop = () => {


    const {user} = useContext(UserContext);
    const { cart, setCart } = useContext(CartContext);
    
    const addToCart = () => {
        const sameProducts = cart.filter(item => item === products)
        Object.assign(products, {
            qty: sameProducts.length + 1
        });
        setCart([...cart, products]);
    }

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