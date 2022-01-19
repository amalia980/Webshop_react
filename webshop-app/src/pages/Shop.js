import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { CartContext } from "../context/CartContext";

import './CSS/Shop.css';
import products from '../services/products';

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

                {products.map((item) => (
                    <div className='cards' key={item.id}>
                    <div className='card'>
                        <img className="img" src={item.img} alt={item.title}/>
                            <div className='card-txts'>
                                <h3 className='card-text'>{item.title}</h3>
                                <h4 className='card-text'>${item.price}</h4>
                            </div>
                            <button onClick={addToCart} className='btn-card'>Add to Cart</button>
                        </div>
                    </div>
                ))}         
            </div>
            </>
    )
}

export default Shop;