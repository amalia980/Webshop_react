import './CSS/Shop.css';
import products from '../services/products';

const Shop = () => {


    return (
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
    )
}

export default Shop;