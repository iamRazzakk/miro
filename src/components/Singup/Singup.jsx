import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Singup = () => {
    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleLoginWithGoogle = () => {
        console.log("Sign in with Google");
    };

    return (
        <div className="md:w-1/2 md:mx-auto bg-blue-200 p-4 m-4 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="card-body">
                <h1 className="text-3xl font-bold md:mb-6 mb-4 text-center">
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
                <div className="ml-4 mr-4">
                    <label className="label">
                        <span className="label-text text-black font-bold">Image URL</span>
                    </label>
                    <input type="url" name="url" placeholder="Enter img url" className="input input-bordered bg-white text-black  py-4 px-6 rounded-full mt-4 w-full" required />
                </div>

                <div className="ml-4 mr-4 mt-6 flex justify-center items-center ">
                    <button className="bg-[#3d90e9] text-white py-3 px-8 rounded-full w-full md:w-auto">Sing up</button>
                </div>
                <h1 className="text-center font-bold">Already have an account? <Link className="text-blue-500" to="/login">Login</Link></h1>
                <hr className="bg-black my-4" />
                <p className="text-center">
                    <FcGoogle onClick={handleLoginWithGoogle} className="inline-block text-2xl mr-4 cursor-pointer" />
                    <FaGithub className="inline-block text-2xl cursor-pointer" />
                </p>
            </form>
        </div>
    );
};

export default Singup;