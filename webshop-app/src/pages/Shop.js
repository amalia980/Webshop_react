import './CSS/Shop.css';

const Shop = () => {


    return (
        <div className='container'>
            <div className='wrapper-products'>
                <div className='card'>
                    <p>title</p>
                    <p>price</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div className='wrapper-cart'>
                <div className='cart'>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    )
}

export default Shop;