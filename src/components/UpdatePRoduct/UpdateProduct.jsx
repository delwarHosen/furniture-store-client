import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, quantity, details, category, price, discount, photoUrl } = product;
    const handleUpdateProduct = event => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const photoUrl = form.photoUrl.value;

        const addProduct = {
            name,
            quantity, details, category, price, discount, photoUrl
        }

        console.log(addProduct);
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Product updated",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    // console.log(product);
    return (
        <div className='flex justify-center mt-14 '>
            <div>
                <h1 className='text-5xl font-bold text-center uppercase underline'>Update Product </h1>
                <div className='mt-10'>
                    <div className="card bg-base-100 shadow-md">
                        <form onSubmit={handleUpdateProduct} className=" md:m-10 m-5">
                            <div className='md:grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <label className='input-group'>
                                        <input type="Text" name='name' defaultValue={name} placeholder="Product Name" className="input input-bordered md:w-[500px] w-full" required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Quantity</span>
                                    </label>
                                    <input type="number" name='quantity' defaultValue={quantity} placeholder="Product Quantity" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Description</span>
                                    </label>
                                    <input type="text" name='details' defaultValue={details} placeholder="Product Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Category</span>
                                    </label>
                                    <input type="text" name='category' defaultValue={category} placeholder="Product Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price</span>
                                    </label>
                                    <input type="number" name='price' defaultValue={price} placeholder="Product Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Offer Price</span>
                                    </label>
                                    <input type="number" name='discount' defaultValue={discount} placeholder="Product Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoUrl' defaultValue={photoUrl} placeholder="Product Price" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className='text-center'>
                                <button className='btn bg-[#F99E1E] px-20 text-white mt-5 mx-auto'>Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;