import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Auth/Firebase";
import { FcGoogle } from "react-icons/fc";


const Singin = () => {
    const { singInWithGoogle,singInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLoginWithGoogle = () => {
        singInWithGoogle(auth, GoogleAuthProvider)
        console.log('login with google')
            // .then(result => {
            //     const user = result.user
            //     const Toast = Swal.mixin({
            //         toast: true,
            //         position: "top-end",
            //         showConfirmButton: false,
            //         timer: 3000,
            //         background: "3d90e9",
            //         timerProgressBar: true,
            //         didOpen: (toast) => {
            //             toast.onmouseenter = Swal.stopTimer;
            //             toast.onmouseleave = Swal.resumeTimer;
            //         }
            //     });
            //     Toast.fire({
            //         icon: "success",
            //         title: "Sign in successfully"
            //     });

            //     navigate('/')
            //     console.log(user);
            // })
            // .catch(error => {
            //     console.log(error);
            // })
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        singInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign in successfully"
                });

                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="md:w-1/2 md:mx-auto bg-blue-200 p-4 m-4 rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-3xl font-bold md:mb-6 mb-4 text-center">
                    Sing In Form
                </h1>
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
                    <button className="bg-[#3d90e9] text-white py-3 px-8 rounded-full w-full md:w-auto">Log In</button>
                </div>
                <h1 className="text-center font-bold">Already have an account? <Link className="text-blue-500" to="/singup">Sing up</Link></h1>
                <hr className="bg-black my-4" />
                <p className="text-center">
                    <FcGoogle onClick={handleLoginWithGoogle} className="inline-block text-2xl mr-4 cursor-pointer" />
                </p>
            </form>
        </div>
    );
};

export default Singin;