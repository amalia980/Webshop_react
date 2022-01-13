import './CSS/Shop.css';

const Shop = () => {


    return (
        <div className='container'>
            <div className='wrapper-products'>

                <div className='card'>
                    <div>
                        <img className="img" src="#"/>
                            <div className='card-txts'>
                                <h3>title</h3>
                                <h4>price</h4>
                                <button className='btn-card'>Add to Cart</button>
                            </div>
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