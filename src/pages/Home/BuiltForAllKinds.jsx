import { useState } from "react";
import '../../components/Css/WayYouWork.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import img from '../../assets/image2.png'
import goldIcons from '../../assets/goldIcon.png'
import xdImg from '../../assets/xd.png'
import figmaImg from '../../assets/figma.png'
import noationImg from '../../assets/noation.png'

import { IoCheckmarkOutline } from "react-icons/io5";

const BuiltForAllKinds = () => {
    const [activeItem, setActiveItem] = useState(1);

    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };

    const handleMouseLeave = () => {
        setActiveItem(1);
    };
    return (
        <div className='px-4 lg:px-6 lg:mt-32 text-[#050038]'>
            <h1 className='text-3xl text-center lg:text-left font-bold mb-2 lg:mb-4'>Built for the way you work</h1>
            <ul className="lg:flex flex-wrap  justify-between px-4">
                <li
                    className={`button  ${activeItem === 1 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    UX & Design
                </li>
                <li
                    className={`button ${activeItem === 2 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    Marketing
                </li>
                <li
                    className={`button ${activeItem === 3 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    Product Management
                </li>
                <li
                    className={`button ${activeItem === 4 ? 'active px-10 py-4' : ''}`}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    Engineering
                </li>
                <li
                    className={`button ${activeItem === 5 ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                >
                    Consultants
                </li>
                <li
                    className={`button ${activeItem === 6 ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(6)}
                    onMouseLeave={handleMouseLeave}
                >
                    Agile Coaches
                </li>
                <li
                    className={`button ${activeItem === 7 ? 'active' : ''}`}
                    onMouseEnter={() => handleMouseEnter(7)}
                    onMouseLeave={handleMouseLeave}
                >
                    Sales
                </li>
            </ul>
            <div className='lg:mt-4 lg:flex justify-center gap-4'>
                <div className='flex-1 space-y-4 p-10'>
                    <div className="flex items-center gap-4">
                        <IoCheckmarkOutline></IoCheckmarkOutline>
                        <h3>Build low-fi wireframes</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <IoCheckmarkOutline></IoCheckmarkOutline>
                        <h3>Involve stakeholders in the design process</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <IoCheckmarkOutline></IoCheckmarkOutline>
                        <h3>Run engaging design Workshops</h3>
                    </div>
                    <div className="flex text-xl items-center "><button className="text-[#4262FF] underline">Learn more</button>
                        <span><IoIosArrowRoundForward></IoIosArrowRoundForward></span>
                    </div>
                    <div className="mt-6">
                        <h3>Integrate your favorite tools</h3>
                        <div className="grid grid-cols-4 lg:mt-4 ">
                            <img className="w-12 h-1w-12" src={goldIcons} alt="" />
                            <img className="w-12 h-1w-12" src={xdImg} alt="" />
                            <img className="w-12 h-1w-12" src={figmaImg} alt="" />
                            <img className="w-12 h-1w-12" src={noationImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BuiltForAllKinds;