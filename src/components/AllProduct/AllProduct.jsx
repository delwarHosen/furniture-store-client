import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const AllProduct = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl text-center mt-10'> All product</h1>
            <div className='grid md:grid-cols-2 gap-5 mt-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProduct;