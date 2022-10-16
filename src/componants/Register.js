import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    console.log('createUser', createUser);

    const handleOnSubmitForm = event => {
        event.preventDefault(); //1st use for nor reload

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        //Add Create user and Sign in user using context API
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('registered user', user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    //G1 google handle btn
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold"> Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleOnSubmitForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="new password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already, have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">REGISTER</button>
                            </div>
                        </form>

                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;