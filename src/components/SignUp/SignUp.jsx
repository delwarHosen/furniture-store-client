import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthPRovider';


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error=>{
                console.log(error.message);
            })
    }




    return (
        <div className="md:w-1/2 mx-auto ">
            <h2 className='text-3xl text-center font-bold uppercase mt-5'>Please Signup!</h2>
            <div className="hero-content">
                <div className="card bg-base-100 w-full shadow-lg">
                    <form onSubmit={handSignUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#F99E1E] text-white font-semibold text-[18px] uppercase">Please Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;