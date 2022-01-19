import products from "../services/products";
import { useState, useEffect} from 'react';
import DisplayProds from "./DisplayProds";

const Products = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(products);
    }, []);

    return (
        <>
            {items.map((item) => (
                <DisplayProds key={item.id} product={item} />
            ))}
        </>
    )
}

export default Products;