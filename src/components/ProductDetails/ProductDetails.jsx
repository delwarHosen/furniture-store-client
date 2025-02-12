import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    const { _id, name, quantity, details, category, price, discount, photoUrl } = product;
    return (
        <div className="hero bg-base-200  p-20">
            <div className="flex flex-col lg:flex-row">
                <div className='w-1/2'>
                    <img
                        src={photoUrl}
                        className="max-w-sm rounded-lg shadow-lg" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-3">
                        {details}
                    </p>
                    <p className='py-2'>Quantity: {quantity}</p>
                    <p className='py-2'>Product Category: {category}</p>
                    <div className='flex gap-20 py-2'>
                        <p>Product Price: {price}TK</p>
                        <p>Offer Price: {discount}TK</p>
                    </div>
                    <div className='space-x-7 mt-5'>
                        <button className="btn btn-primary ">Add to Cart</button>
                        <button className="btn bg-[#F99E1E] text-white">Update Product</button>
                        <button className="btn bg-[#DB092C] text-white">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;