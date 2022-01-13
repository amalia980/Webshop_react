import './CSS/Shop.css';

const Shop = () => {


    return (
        <div className='container'>
            <div className='wrapper-products'>

                <div className='card'>
                    <div>
                        <img className="img" src="#"/>
                            <div className='card-txts'>
                                <h3 className='card-text'>title</h3>
                                <h4 className='card-text'>price</h4>
                            </div>
                            <button className='btn-card'>Add to Cart</button>
                    </div>
                </div>          
            </div>

            <div className='wrapper-cart'>
                <div className='cart'>
                    <div>
                        <h2>Cart</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;