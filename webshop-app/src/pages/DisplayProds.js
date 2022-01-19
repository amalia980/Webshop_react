

const DisplayProds = ({product}) => {

    return (
        <>
            <div className='cards' key={product.id}>
                    <div className='card'>
                        <img className="img" src={product.img} alt={product.title}/>
                            <div className='card-txts'>
                                <h3 className='card-text'>{product.title}</h3>
                                <h4 className='card-text'>${product.price}</h4>
                            </div>
                            <button /*onClick={addToCart}*/ className='btn-card'>Add to Cart</button>
                        </div>
                    </div>
        </>
    )
}

export default DisplayProds;