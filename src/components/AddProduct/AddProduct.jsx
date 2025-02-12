import React from 'react';

const AddProduct = () => {

    const handleAddProduct = event => {
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

        fetch("http://localhost:5000/product", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='flex justify-center mt-14 '>
            <div>
                <h1 className='text-5xl font-bold text-center uppercase underline'>Add Product </h1>
                <div className='mt-10'>
                    <div className="card bg-base-100 shadow-md">
                        <form onSubmit={handleAddProduct} className=" md:m-10 m-5">
                            <div className='md:grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <label className='input-group'>
                                        <input type="Text" name='name' placeholder="Product Name" className="input input-bordered md:px-40 px-20" required />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Quantity</span>
                                    </label>
                                    <input type="number" name='quantity' placeholder="Product Quantity" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Description</span>
                                    </label>
                                    <input type="text" name='details' placeholder="Product Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Category</span>
                                    </label>
                                    <input type="text" name='category' placeholder="Product Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Price</span>
                                    </label>
                                    <input type="number" name='price' placeholder="Product Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Offer Price</span>
                                    </label>
                                    <input type="number" name='discount' placeholder="Product Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoUrl' placeholder="Product Price" className="input input-bordered" required />
                                </div>

                            </div>
                            <div className='text-center'>
                                <button className='btn bg-[#F99E1E] px-20 text-white mt-5 mx-auto'>Add Product</button>
                            </div>
                        </form>
                    </div>

                    {/* <label className="form-control w-full ">
                        <div className="label">
                            <p>Product Name</p>
                        </div>
                        <input type="text" placeholder="Add Your Product" className="input input-bordered w-full" />
                    </label> */}
                    {/* <label className="form-control w-full ">
                        <div className="label">
                            <p>Product Quantity</p>
                        </div>
                        <input type="text" placeholder="Product product quantity" className="input input-bordered w-full" />
                    </label> */}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;