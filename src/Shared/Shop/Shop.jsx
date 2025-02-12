import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Shop = () => {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center underline mt-14 uppercase'>New Arrival Product</h1>
            <div className='flex justify-center mt-10'>
                <div className='grid md:grid-cols-3 gap-5 '>
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;