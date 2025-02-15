import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = ({ product, products, setProducts }) => {
    const { _id, name, details, photoUrl } = product;

    console.log(products);

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/product/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            })
                           
                        }
                        const remaining = products.filter(clear => clear._id !== _id);
                        setProducts(remaining)
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photoUrl}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <Link to={`/dashboard/updateProduct/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#DB092C] text-white">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Product;