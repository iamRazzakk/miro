import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { useState } from "react";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="flex flex-col md:flex-row md:mb-6">
            {/* Hamburger menu for mobile */}
            <div className="flex items-center justify-end md:hidden">
                <MdMenu className="text-2xl" onClick={toggleMenu} />
            </div>
            {/* Navbar items */}
            <div className={`md:flex md:flex-1 md:items-center ${showMenu ? "flex flex-col md:flex-row-reverse" : "hidden"}`}>
                <ul className="flex flex-col md:flex-row gap-4">
                    <li className="text-xl">Miro</li>
                    <li className="flex items-center text-xl">
                        Product  <MdKeyboardArrowDown />
                    </li>
                    <li className="flex items-center text-xl">Solutions <MdKeyboardArrowDown /></li>
                    <li className="flex items-center text-xl">Resources <MdKeyboardArrowDown /></li>
                    <li className="flex items-center text-xl">Enterprise <MdKeyboardArrowDown /></li>
                    <li className="flex items-center text-xl">Pricing <MdKeyboardArrowDown /></li>
                </ul>
            </div>
            <div className={`md:flex md:flex-1 md:items-end md:justify-end ${showMenu ? "flex flex-col md:flex-row-reverse" : "hidden"}`}>
                <ul className={`flex flex-col md:flex-row gap-4 ${showMenu ? 'justify-end' : 'justify-start'}`}>
                    <li className="flex items-center text-xl gap-2 justify-center"><TbWorld />EN</li>
                    <li className="flex items-center text-xl">Contact Sales</li>
                    <li className="flex items-center text-xl">Login</li>
                    <li>
                        <button className="mt-2 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 bg-[#4262FF] text-white rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4262FF]  group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sign up free</span>
                            <span className="relative invisible">Sign up free</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
