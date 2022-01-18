import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import './CSS/Shop.css';
import products from '../services/products';

const Shop = () => {

    const {user} = useContext(UserContext);

    return (
        <>
        <div className="bodyAccount">
            <h2 className="welcomeText">Welcome {user.firstname}!</h2>
        </div>
            <div className='wrapper-products'>

                {products.map((item) => (
                    <div className='cards'>
                    <div className='card'>
                        <img className="img" src={item.img} alt={item.title}/>
                            <div className='card-txts'>
                                <h3 className='card-text'>{item.title}</h3>
                                <h4 className='card-text'>${item.price}</h4>
                            </div>
                            <button className='btn-card'>Add to Cart</button>
                        </div>
                    </div>
                ))}         
            </div>
            </>
    )
}

export default Shop;