import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id,name, details, photoUrl } = product;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={photoUrl}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{details}</p>
                <div className=" w-full">
                    <Link to={`product/${_id}`}><button className="btn bg-[#F99E1E] text-white w-full">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;