/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import auth from "../Auth/Firebase";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
const Singup = () => {
    const { createUser, singInWithGoogle } = useContext(AuthContext)
    const [haveUser, setHaveUser] = useState(false);
    const navigate = useNavigate()
    const handleAddedUser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setHaveUser(true)
                e.target.reset()
                navigate('/login')

            })
            .catch(error => {
                console.log(error);
                setHaveUser(false)
            })
    }
    // singInWithGoogle(auth, GoogleAuthProvider)
    navigate('/')
    // .then(result => {
    //     const user = result.user
    //     console.log(user);
    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top-end",
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //             toast.onmouseenter = Swal.stopTimer;
    //             toast.onmouseleave = Swal.resumeTimer;
    //         }
    //     });
    //     Toast.fire({
    //         icon: "success",
    //         title: "Sign Up successfully"
    //     });

    //     navigate('/')
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    return (
        <div className="lg:w-1/2 lg:mx-auto bg-blue-200 p-4 m-4 rounded-lg shadow-lg">
            <form onSubmit={handleAddedUser} className="card-body">
                <h1 className="text-3xl font-bold lg:mb-6 mb-4 text-center">
                    Sing up Form
                </h1>
                <div className="ml-4 mr-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white text-black  py-4 px-6 rounded-full mt-4 w-full" required />
                </div>
                <div className="ml-4 mr-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white text-black  py-4 px-6 rounded-full mt-4 w-full" required />
                </div>
                <div className="ml-4 mr-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white text-black  py-4 px-6 rounded-full mt-4 w-full" required />
                </div>
                <div className="ml-4 mr-4 mt-6 flex justify-center items-center ">
                    <button className="bg-[#3d90e9] text-white py-3 px-8 rounded-full w-full lg:w-auto">Sing up</button>
                </div>
                <h1 className="text-center font-bold">Already have an account? <Link className="text-blue-500" to="/login">Login</Link></h1>
                {/* <hr className="bg-black my-4" />
                <p className="text-center">
                    <FcGoogle onClick={singInWithGoogle} className="inline-block text-2xl mr-4 cursor-pointer" />
                </p> */}
            </form>
        </div>
    );
};

export default Singup;