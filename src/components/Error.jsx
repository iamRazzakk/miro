/* eslint-disable react/prop-types */


import { useNavigate } from "react-router-dom";

const Error = ({ errorMessage, errorCode }) => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-[#050038] mb-4">Error {errorCode}</h1>
                <p className="text-lg text-gray-700">{errorMessage}</p>
                <button
                    onClick={() => {
                        navigate('/'); 
                    }}
                    className="mt-8 bg-[#050038] text-white px-4 py-2 rounded hover:bg-[#050030] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                    Go to Home Page
                </button>
            </div>
        </div>
    );
};

export default Error;
