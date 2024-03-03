import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    console.log(navigate)
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="flex flex-col lg:flex-row lg:mb-6 lg:px-4">
            {/* Hamburger menu for mobile */}
            <div className="flex items-center justify-end mr-14 lg:hidden">
                <MdMenu className="text-2xl" onClick={toggleMenu} />
            </div>
            {/* Navbar items */}
            <div className={`lg:flex lg:flex-1 lg:items-center ${showMenu ? "flex flex-col lg:flex-row-reverse" : "hidden"}`}>
                <ul className="flex flex-col lg:flex-row gap-4">
                    <Link to={'/'}>
                        <li className="text-xl font-bold">Miro</li>
                    </Link>
                    <li className="flex items-center text-xl cursor-pointer">
                        Product  <MdKeyboardArrowDown />
                    </li>
                    <li className="flex items-center text-xl cursor-pointer">Solutions <MdKeyboardArrowDown /></li>
                    <li className="flex items-center text-xl cursor-pointer">Resources <MdKeyboardArrowDown /></li>
                    <li className="flex items-center text-xl cursor-pointer">Enterprise <MdKeyboardArrowDown /></li>
                    <li className="flex items-center text-xl cursor-pointer">Pricing <MdKeyboardArrowDown /></li>
                </ul>
            </div>
            <div className={`lg:flex lg:flex-1 lg:items-end lg:justify-end ${showMenu ? "flex flex-col lg:flex-row-reverse" : "hidden"}`}>
                <ul className={`flex flex-col lg:flex-row gap-4 ${showMenu ? 'justify-end' : 'justify-start'}`}>
                    <li className="flex items-center text-xl cursor-pointer gap-2 justify-center"><TbWorld />EN</li>
                    <li className="flex items-center text-xl cursor-pointer">Contact Sales</li>
                    <li className="flex items-center text-xl cursor-pointer">
                        <Link to='/login'>
                            <button>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/singup'>
                            <button className="mt-2 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 bg-[#4262FF] text-white rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4262FF]  group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sign up free</span>
                                <span className="relative invisible">Sign up free</span>
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>
        </div >
    );
};

export default Navbar;
