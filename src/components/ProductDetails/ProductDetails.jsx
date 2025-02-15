import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ProductDetails = () => {
    const product = useLoaderData()
    const { _id, name, quantity, details, category, price, discount, photoUrl } = product;
    return (
        <div className="hero bg-base-200 flex justify-center md:p-20">
            <div className="flex flex-col lg:flex-row">
                <div className='md:w-1/2 mx-auto'>
                    <img
                        src={photoUrl}
                        className="max-w-sm rounded-lg shadow-lg" />
                </div>
                <div className=' md:w-1/2 p-5'>
                    <h1 className="md:text-3xl text-2xl font-bold">{name}</h1>
                    <p className="py-3">
                        {details}
                    </p>
                    <p className='py-2'>Quantity: {quantity}</p>
                    <p className='py-2'>Product Category: {category}</p>
                    <div className='flex gap-20 py-2'>
                        <p>Product Price: {price}TK</p>
                        <p>Offer Price: {discount}TK</p>
                    </div>
                    <div className='md:space-x-7 space-x-2 mt-5'>
                        <button className="btn btn-primary ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;